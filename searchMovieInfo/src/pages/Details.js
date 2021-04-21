import React, { Component } from "react";
import PropType from "prop-types";

const API_KEY = "34853ac2";

export class Detail extends Component {
  static propType = {
    match: PropType.shape({
      params: PropType.object,
      isExact: PropType.bool,
      path: PropType.string,
      url: PropType.string
    })
  };

  state = { detailMovie: {} };

  componentDidMount() {
    console.log(this.props);
    const { movieid } = this.props.match.params;
    this._fetchMovie({ id: movieid });
  }

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(detailMovie => {
        console.log(detailMovie);
        this.setState({ detailMovie });
      });
  }

  _goBack() {
    window.history.back();
  }

  render() {
    const {
      Title,
      Poster,
      Actors,
      Plot,
      Language,
      Country,
      Director,
      Genre,
      Production,
      Released,
      Runtime
    } = this.state.detailMovie;

    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="box">
                  <div className="media-content">
                    <figure className="image is-25by9">
                      <img src={Poster} alt={Title} />
                    </figure>
                  </div>
                  <br />
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h2>{Title}</h2>
                        <p style={{ textAlign: "justify" }}>{Plot}</p>
                        <ul>
                          <li>
                            <strong>Actors:</strong> {Actors}
                          </li>
                          <li>
                            <strong>Language:</strong> {Language}
                          </li>
                          <li>
                            <strong>Region:</strong> {Country}
                          </li>
                          <li>
                            <strong>Director:</strong> {Director}
                          </li>
                          <li>
                            <strong>Genre:</strong> {Genre}
                          </li>
                          <li>
                            <strong>Producer:</strong> {Production}
                          </li>
                          <li>
                            <strong>Released Year:</strong> {Released}{" "}
                          </li>
                          <li>
                            <strong>Duration:</strong> {Runtime}{" "}
                          </li>
                        </ul>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a
                            className="button is-link"
                            onClick={this._goBack}
                            aria-label="reply"
                          >
                            <span className="icon is-small">
                              <i
                                className="fa fa-arrow-left"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
