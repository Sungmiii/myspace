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
      console.log(title);


      this.setState({
        title: title,
        searchTerm: searchTerm
       
      });
    });
  }

  render() {
    return (
      <div>
        <marquee><h1>A Truely Terrible Idea!</h1></marquee>
        <h3>Bought to you by Urban Dictionary.</h3>
        <h2>Your Word of the day: {searchTerm}</h2>
        <ul>
          {/* <li>{this.state.title && this.state.title.description}</li> */}
          <li>
            <searchTerm searchTerm={this.state.title} />
          </li>
          {this.state.title.map(title => <li><Title title={title} /></li>)}
        </ul>
      </div>
    );
  }
}

export default App;