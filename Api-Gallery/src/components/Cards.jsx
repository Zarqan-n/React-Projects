import React, { useState } from "react";

const Cards = (props) => {

  console.log(props.elem)
  return (
    <a
      href={props.elem.url}
      className=" bg-blue-300 text-black overflow-hidden rounded-xl"
    >
      <img className="h-50 w-70" src={props.elem.download_url} alt="" />
      <h3 className="text-center font-bold">{props.elem.author}</h3>
    </a>
  );
};

export default Cards;
