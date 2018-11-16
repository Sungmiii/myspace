import React from "react";
import { getUD } from "../api";
import Title from "./Title";
import searchTerm from "./searchTerm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [],
      searchTerm: ""
    };
  }
  componentDidMount() {
    getUD().then(title => {
      // console.log("where is from", title[1]);
      this.setState({
        title: title,
        searchTerm: searchTerm
      });
    });
  }



  render() {
    return (
      <div className="word">
        <marquee>
          <h1>A Truely Terrible Idea!</h1>
        </marquee>
        <h3>Bought to you by Urban Dictionary.</h3>
        <h2>Your Word of the day:</h2>
        <p>
          {" "}
          <searchTerm searchTerm={this.state.title} />
        </p>
        <p>
          {this.state.title.length && <Title title={this.state.title[0]} />}

        </p>
      </div>
    );
  }
}

export default App;

