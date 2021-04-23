import React, { Component, useState } from 'react';
import './review_add.css';

export default class AddReview extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            user_name: '',
            movie_id: '',
            movie_name: '',
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
                    id: this.review_id.value,
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
           
            <form onSubmit={this.handleSubmit}>
            <table className="addreview" >
            <h2>Add Review</h2>
              <tr>
              <th>Reviews ID</th>
              <td><input ref={(ref) => {this.review_id = ref}} type="text" name="review_id"/></td>
              </tr>
              
              <tr>
              <th>User Name</th>
              <td><input ref={(ref) => {this.review_name= ref}} type="text" name="review_name" /></td>
              </tr>
    
              <tr>
              <th>Movie ID</th>
              <td><input ref={(ref) => {this.review_movieid= ref}} type="text" name="review_movieid"/></td>
              </tr>
    
              <tr>
              <th>Movie Name</th>
              <td><input ref={(ref) => {this.review_moviename= ref}} type="text" name="review_moviename"/></td>
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