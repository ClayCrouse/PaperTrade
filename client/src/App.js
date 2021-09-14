import Axios from 'axios'
import Button from './components/Button'
import Currency from './components/Currency'
import Balance from './components/Balance'
import Header from './components/Header'

function App() {

const getData = () => {
  //Axios.get("https://catfact.ninja/fact").then((response) => {
  //  console.log(response)
  //})
  Axios.get("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=1INDe5OY16j1m_HJHpXhsPLxeJ5Gek0k").then((response) => {
    console.log(response)
  })
}

  return (
    <div style={{backgroundColor:"#F4EFAC"}}>
    {//style={{backgroundImage: `url("https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg")`}} >
    }
      <br/>
      <Header />
      <Balance />
      <br/>
      <button onClick={getData}>Get Data</button>
      <Button text='Buy' color='green' />
      <Button text='Sell' color='red' />

      

      <div style={{backgroundColor:'lightgrey'}}>
        <Currency name='Bitcoin' value={100.01}/>
        <Currency name='Etherium' value={100.01}/>
      </div>
      <br />
    </div>
  );
}

export default App;
