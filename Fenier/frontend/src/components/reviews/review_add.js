import React, { Component, useState } from 'react';
import './review_add.css';

export default class Addreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
        console.log(this.state.movie_name);
        var id = 'id'
        var movie_id = 'movie_id'
        var movie_name = 'movie_name'
        var data = {
            user_name: this.review_name.value,
            rates: this.review_rates.value,
            comments: this.review_comment.value,
        }
        data[id] = 1
        data[movie_id] = this.state.movie_id
        data[movie_name] = this.state.movie_name

        // On submit of the form, send a POST request with the data to the server.
        fetch('http://localhost:8000/reviews/id=1', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
                console.log(body);
            });
    }

    render() {
        return ( <div id="container">
            <form onSubmit={this.handleSubmit}>
            <table className="addreview" >
            <h2>Add Review</h2>              
              <tr>
              <th>User Name</th>
              <td><input ref={(ref) => {this.review_name= ref}} type="text" name="review_name" /></td>
              </tr>
              <tr>
              <th>Movie Name</th>
               <th>&nbsp; &nbsp; &nbsp; &nbsp; {this.state.movie_name}</th>
              </tr>
    
              <tr>
              <th>Rates</th>
              <td><input ref={(ref) => {this.review_rates= ref}} type="text" name="review_rates"/></td>
              </tr>
    
              <tr>
              <th>Comment</th>
              <td><textarea ref={(ref) => {this.review_comment= ref}}  name="review_comment"/></td>
              </tr>
    
              <button id="add" onClick={()=>alert('successfully!')}>Submit</button>
    
            </table>
            </form>
            </div>
        );
    }
}