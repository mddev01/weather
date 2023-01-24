import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const Time = new Date()
  const Hafta = Time.getDay()
  const sortt = Hafta == '1' ? 'Dushanba' : Hafta == '2' ? 'Seshanba' : Hafta == '3' ? 'Chorshanba' : Hafta == '5' ? 'Juma' : Hafta == '4' ? 'Payshanba' : Hafta == '6' ? 'Shanba' : 'Yakshanba'
  const Day = Time.getDate()
  const Month = Time.getMonth()
  const sortMonth = Month == '0' ? 'Yan' : Month == '1' ? 'Feb' : Month == '2' ? 'Mar' : Month == '3' ? 'Apr' : Month == '4' ? 'May' : Month == '5' ? 'Iyun' : Month == '6' ? 'Iyul' : Month == '7' ? 'Avg' : Month == '8' ? 'Sen' : Month == '9' ? 'Okt' : Month == '10' ? 'Noy' : 'Dek'
  const Year = Time.getFullYear()
  const Times = Time.getHours()
  const Minuts = Time.getMinutes()

  useEffect(()=>{
    const lat = 40.82;
    const lon = 72.28;
    const api = "6cf7bf55e2412e0575609b0f45e4a5a1";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`
    )
      .then((response) => {
        return response.json('');
      })
      .then((data) => {
        setData(data);
      });
  },[])

  console.log(data);

  return (
    <div className="App container">
      <h1>{data?.main?.temp}<sup>o</sup></h1>
      <div className="right">
      <h2>{data?.name}</h2>
      <h3>{Times}:{Minuts} - {sortt}, {Year}, {sortMonth}  '{Day}</h3>
      </div>
      <hr />
      <div className="left">
        <div className="clody">
          <p>Cloudy</p>
          <p>{data?.main?.temp}</p>
        </div>
        <div className="humidity">
          <p>Cloudy</p>
          <p>{data?.clouds?.all}%</p>
        </div>
        <div className="wind">
          <p>Wind</p>
          <p>{data?.wind?.speed}km/h</p>
        </div>
        <div className="rein">
          <p>Rain</p>
        </div>
      </div>
    </div>
  );
}

export default App;
