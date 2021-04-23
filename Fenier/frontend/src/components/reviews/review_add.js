import React, { Component, useState } from 'react';
import './review_add.css';

export default class AddReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            movie_id: this.props.match.params.movieid,
            movie_name: this.props.match.params.moviename,
            rates: '',
            comments: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var self = this;
        console.log(this.review_name.value);

        // On submit of the form, send a POST request with the data to the server.
        fetch('/reviews/', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_name: this.review_name.value,
                    movie_id: this.review_movieid.value,
                    movie_name: this.review_moviename.value,
                    rates: this.review_rates.value,
                    comments: this.review_comment.value,
                })
            })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
                console.log(body);
            });
    }

    render() {
        return ( <div>
            <h2>{this.props.match.params.movieid}</h2>
            <h2>{this.props.match.params.moviename}</h2>
            <form onSubmit={this.handleSubmit}>
            <table className="addreview" >
            <h2>Add Review</h2>
              
              <tr>
              <th>User Name</th>
              <td><input ref={(ref) => {this.review_name= ref}} type="text" name="review_name" /></td>
              </tr>
    
    
              <tr>
              <th>Rates</th>
              <td><input ref={(ref) => {this.review_rates= ref}} type="text" name="review_rates"/></td>
              </tr>
    
              <tr>
              <th>Comment</th>
              <td><textarea ref={(ref) => {this.review_comment= ref}}  name="review_comment"/></td>
              </tr>
    
              <button id="add" onClick="submit">Submit</button>
    
            </table>
            </form>
            </div>
        );
    }
}