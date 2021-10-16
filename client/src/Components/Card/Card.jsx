import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <article>
        <h2>
          {props.coinName} ({props.coinSymbol})
        </h2>
        <p>
          $ {props.coinPrice} per {props.coinSymbol}
        </p>
      </article>
    </div>
  );
}

export default Card;
