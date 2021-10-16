import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import LunarCrush from "./Components/LunarCrush/LunarCrush";
import Messari from "./Components/Messari/Messari";
import Recommendation from "./Components/Recommendation/Recommendation";
import axios from "axios";

function App() {
  const [lunar, setLunar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.lunarcrush.com/v2?data=market&key=t7583msb2asugygjl8vcto"
      )
      .then((res) => {
        const data = res.data.data;
        const dataArr = [];
        const btcArr = data.filter((obj) => obj.id === 1);
        const ethArr = data.filter((obj) => obj.id === 2);

        dataArr.push(btcArr[0], ethArr[0]);
        setLunar(dataArr);
      })

      .catch((err) => {
        console.error(err);
      }, []);

    axios
      .get("https://data.messari.io/api/v1/assets/btc/metrics")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <span>{lunar && !lunar}</span>
      <Header />
      <LunarCrush lunarApi={lunar} marketName={"LunarCRUSH"} />
      <Messari marketName={"Messari"} />
      <Recommendation />
    </div>
  );
}

export default App;
