//import Axios from "axios";
import Button from "./components/Button";
import Currency from "./components/Currency";
import Balance from "./components/Balance";
import Header from "./components/Header";

function App() {
  const getData = async () => {
    const res = await fetch("http://localhost:8080/data?ticker=BTCUSDT");
    const resJson = await res.json();
    console.log(resJson);
  };

  return (
    <div style={{ backgroundColor: "#F4EFAC" }}>
      {
        //style={{backgroundImage: `url("https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg")`}} >
      }
      <br />
      <Header />
      <Balance />
      <br />
      <button onClick={getData}>Get Data</button>
      <Button text="Buy" color="green" />
      <Button text="Sell" color="red" />

      <div style={{ backgroundColor: "lightgrey" }}>
        <Currency name="Bitcoin" value={100.01} />
        <Currency name="Etherium" value={100.01} />
      </div>
      <br />
    </div>
  );
}

export default App;
