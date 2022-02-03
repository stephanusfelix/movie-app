import React from "react";
import Movie from "./components/moviecard";
import Navbar from "./components/navbar";
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
    this.search = this.search.bind(this);
  }
  search(keyword) {
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
    fetch("https://www.omdbapi.com/?s=man&page=1&apikey=65525897", {
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
      <div className="main">
        <Navbar search={this.search} />

        <h1 className="title-main">Show your favorite movies</h1>

        {this.movieList ? (
          <>
            <h1>Loading</h1>
          </>
        ) : (
          <div className="cards">
            {this.state.movieList.map((movie, index) => (
              <Movie data={movie} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default App;
