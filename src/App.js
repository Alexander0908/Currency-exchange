import { useEffect, useState } from 'react';
import './App.css';

const App = (props) => {
  const [exchange, setExchange] = useState([]);
  const [course, setCourse] = useState('Choose currency');

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(res => res.json())
    .then(setExchange);
  }, []);

  const convert = (currencyCode) => {
    const target = exchange.find(item => item.cc === currencyCode);
    setCourse(`1${target.cc} = ${target.rate}UAH`);
  }


  return (
    <div id="root">
      <div className="counter">{course}</div>
      <div className="controls">
        <button onClick={() => convert('USD')}>USD</button>
        <button onClick={() => convert('CAD')}>CAD</button>
        <button onClick={() => convert('EUR')}>EUR</button>
        <button onClick={() => convert('GBP')}>GBP</button>
      </div>
    </div>
  );
}

export default App;
