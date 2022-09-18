import React from "react";
// import data from "./data";

export default function Card(props) {
  return (
    <div className="card">
      <img src ={props.img} />
      <div className="rating">
        <span>
          <i class="fa-regular fa-star"></i>
        </span>
        <span> {props.rating}</span>
        <span>{props.country}</span>
      </div>
      <h2>{props.name}</h2>
      <h3>
        From $<span>{props.price}</span>
      </h3>
    </div>
  );
}
