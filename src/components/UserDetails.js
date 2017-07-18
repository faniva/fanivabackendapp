import React from 'react';

export default class UserDetails extends React.Component{

    constructor(props){
        super(props)
        this.userId = this.props.userId;

        this.state = {
            user : null
        }
    }

    getUserDetails(){
        const userId = this.userId;

        fetch('http://localhost:9000/users', {
            method: 'GET'
        })
        .then(function(response) {
            console.log(response);
            return response.json()
        })
        .then(function(body) {
            console.log(body);
            this.setState({
                user : body[0]
            })

        }.bind(this))
        .catch(function(error){
            console.log(error)
        });

    }

    componentDidMount(){
        this.getUserDetails()
    }

    render(){

        if(this.state.user === null ){
            return (
                <div>Loading...</div>
            )
        } else {

            return (
                <div>
                    <h2>Welcome, {this.state.user.user_firstname}</h2>

                </div>

            );

        }

    }
}