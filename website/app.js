/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=d40f7fda536b108c70a5106d4c408257';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', generateWeather);

const getWeather = async (baseURL, zip, apiKey) => {
  const res = await fetch(baseURL + zip + apiKey);
  try{
    const data = await res.json();
    console.log(data);
    let feelings = document.getElementById('feelings').value
    postData('/data', {date: newDate, temprature: data.main.temp, feelings: feelings });
    updateUI();
    return data;
  }catch(error){
    console.log('error', error)
  }
}


function generateWeather(e){
  let zip = document.getElementById('zip').value;
  getWeather(baseURL, zip, apiKey);
    
}

const postData = async ( url = '', data = {})=>{
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),      
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

const updateUI = async() => {
  const update = await fetch('/all');
  try{
    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('content').innerHTML = feelings;
  } catch(error) {
    console.log('error', error)
  }
}

