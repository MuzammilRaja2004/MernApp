const url = 'http://192.168.0.108:5000/api/';
const fetchFun = async (path, data) => {
  console.log('Fetch Fun function start');
  const response = await fetch(`${url}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('Fetch Fun  function ending');
  return response.json();
};

const fetchGet = async (path, data) => {
  console.log('Fetch Get function start');
  const response = await fetch(`${url}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('Fetch Get function ending');
  return response.json();
};

export { fetchFun ,fetchGet};
