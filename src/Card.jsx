import React from "react";

export default function Card(props) {
  return (
      <div className="card">
        <img src={props.img} />
        <div className="rating">
          <span><i class="fa-regular fa-star"></i></span>
          <span> {props.rating}</span>
          <span>{ props.country}</span>
        </div>
        <h2>{props.name}</h2>
        <h3>
          From $<span>{props.price}</span>
        </h3>
      {/* <div className="card">
        <img src="./images/card-2.png" />
        <div className="rating">
          <i class="fa-regular fa-star"></i> (6) USA
        </div>
        <h2>Name of content</h2>
        <h3>
          From $<span>13</span>
        </h3>
      </div>
      <div className="card">
        <img src="./images/card-3.jpg" />
        <div className="rating">
          <i class="fa-regular fa-star"></i> (6) USA
        </div>
        <h2>Name of content</h2>
        <h3>
          From $<span>13</span>
        </h3>
      </div> */}
    </div>
  );
}
