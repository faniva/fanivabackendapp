import React from 'react';
import {Link} from 'react-router-dom';


export default class User extends React.Component{

    constructor(props){
        super(props);

        this.userId = props.match.params.userId;

        this.state = {
            user : null
        }
    }

    getUser(userId){

        fetch('http://localhost:9000/users/' + userId, {
            method: 'GET'
        })
            .then( response => {
                console.log(response);
                return response.json()
            })
            .then( body =>  {
                console.log(body);
                this.setState({
                    user : body[0]
                })
            })
            .catch(function(error){
                console.log(error)
            });

    }

    componentDidMount(){
        this.getUser(this.userId)
    }

    render(){

        if(this.state.user === null ){
            return ( <div>loading...</div>)
        } else {

            const user = this.state.user;


            return (
                <div>

                    <div className="view-header is-clearfix">
                        <h3>USER DETAILS</h3>

                        <div className="call-to-action">

                        </div>
                    </div>

                    <div className="content">


                        <div className="columns">
                            <div className="column is-2">First Name: </div>
                            <div className="column">{user.user_firstname}</div>
                        </div>

                        <div className="columns">
                            <div className="column is-2">Last Name: </div>
                            <div className="column">{user.user_lastname}</div>
                        </div>

                        <div className="columns">
                            <div className="column is-2">Email: </div>
                            <div className="column">{user.user_email}</div>
                        </div>

                        <div className="columns">
                            <div className="column is-2">Phone: </div>
                            <div className="column">{user.user_phone}</div>
                        </div>

                        <Link to="/users" className="button is-info">All Users</Link>

                    </div>
                </div>

            );
        }

    }
}