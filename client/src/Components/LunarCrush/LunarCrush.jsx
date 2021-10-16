import React from "react";
import Card from "../Card/Card";
import "./LunarCrush.scss";

function Compare(props) {
  return (
    <div className="container">
      <h1>Prices @ {props.marketName}</h1>
      {props.lunarApi.map((api) => {
        return (
          <Card
            key={api.id}
            coinName={api.n}
            coinPrice={api.p}
            coinSymbol={api.s}
          />
        );
      })}
    </div>
  );
}

export default Compare;
