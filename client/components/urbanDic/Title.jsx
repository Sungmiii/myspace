import React from "react";

function Title(props) {
  let title = props.title;

  console.log(title);

  return (
    <div>
      <h1>{title.word}</h1>
      <p>{title.definition}</p>
      <p>Example: {title.example}</p>
    </div>
  );
}


export default Title;