import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };
  render() {
    const { title, year, poster, id } = this.props;
    return (
      <Link to={`/detail/${id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image" style={{ padding: "30px" }}>
              <img src={poster} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={poster} alt={title} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{year}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
