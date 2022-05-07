const url = 'http://192.168.0.108:5000/api/';
const fetchFun = async (path, data) => {
  console.log('function start');
  const response = await fetch(`${url}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log('function ending');
  return response.json();
};

export default fetchFun;
