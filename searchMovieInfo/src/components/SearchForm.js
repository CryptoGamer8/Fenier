import React, { Component } from "react";

const API_KEY = "34853ac2";

export class SearchForm extends Component {
  state = {
    inputMovie: " "
  };

  _handleChanges = e => {
    this.setState({
      inputMovie: e.target.value
    });
    console.log(this.state.inputMovie);
  };

  _handleSubmit = e => {
    e.preventDefault();
    const inputMovie = this.state.inputMovie;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(result => {
        const { Search = [], totalResult = "" } = result;
        this.props.onResult(Search);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Find a movie"
                onChange={this._handleChanges}
              />
            </div>
            <div className="control">
              <button className="button is-info">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
