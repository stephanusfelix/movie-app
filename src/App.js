import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
    this.search = this.search.bind(this);
  }
  search(keyword){
    fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=65525897`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res.Search);
        this.setState({ movieList: res.Search });
      });
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?s=man&apikey=65525897", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res.Search);
        this.setState({ movieList: res.Search });
      });
  }
  render() {
    return (
      <>
        <Search search={this.search}/>
        <h1>Show your favorite movies</h1>
        {this.movieList ? (
          <>
            <h1>Loading</h1>
          </>
        ) : (
          <>
            {this.state.movieList.map((movie, index) => (
              <Movie data={movie} key={index} />
            ))}
          </>
        )}
      </>
    );
  }
}
export default App;
