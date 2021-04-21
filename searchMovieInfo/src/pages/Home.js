import React, { Component } from "react";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MovieList } from "../components/MovieList";

export class Home extends Component {
  state = {
    result: [],
    userSearch: false
  };
  _handleResults = result => {
    this.setState({
      result,
      userSearch: true
    });
    console.log(this.state.result);
  };
  _renderResults() {
    return this.state.result.length === 0 ? (
      <span className="tag is-danger">No Result</span>
    ) : (
      <MovieList movies={this.state.result} />
    );
  }
  render() {
    //const url = new URL(document.location);
    //const hasId = url.searchParams.has("id");

    //if (hasId) {
    //  return <Details id={url.searchParams.get("id")} />;
    //}
    return (
      <div>
        <Title> Search Movies </Title>
        <br />
        <div className="SearchForm-wrapper">
          <SearchForm onResult={this._handleResults} />
        </div>
        {this.state.userSearch ? (
          this._renderResults()
        ) : (
          <small> Please Type in the Movie's Name </small>
        )}
      </div>
    );
  }
}
