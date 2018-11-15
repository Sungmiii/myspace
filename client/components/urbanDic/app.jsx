import React from "react";
import { getTerm } from "../api.js";
import title from "./title";
import searchTerm from "./searchTerm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: { events: [] },
      searchTerm: ""
    };
  }
  componentDidMount() {
    getTerm().then(title => {
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
        <h1>A truely terrible idea!</h1>
        <ul>
          <li>{this.state.title && this.state.title.description}</li>
          <li>
            <Defiiniton title={this.state.title} />
          </li>
          <li>
            <searchTerm searchTerm ={this.state.searchTerm} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;