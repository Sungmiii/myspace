import React from "react";

function searchTerm(props) {
  let searchTerm = props.searchTerm;
  console.log("prop :", searchTerm);
  let results = searchTerm.events.map(event => {
    return event.title;
  });
  console.log(results);

  return (
    <div>
      {results}
    </div>
  );
}

export default searchTerm;