import React from 'react';
import UsersListItem from './UsersListItem'
// import DomainsListItemTop from './DomainsListItemTop'

export default class Users extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users : null
        }
    }

    getUsers(){

        fetch('http://localhost:9000/users', {
            method: 'GET'
        })
            .then( response => {
                console.log(response);
                return response.json()
            })
            .then( body =>  {
                console.log(body);
                this.setState({
                    users : body
                })
            })
            .catch(function(error){
                console.log(error)
            });

    }

    componentDidMount(){
        this.getUsers()
    }

    render(){

        if(this.state.users === null ){
            return ( <div>loading...</div>)
        } else {

            return (
                <div>

                    <div className="view-header is-clearfix">
                        <h3>USERS</h3>

                        <div className="call-to-action">
                            <button className="button is-info">+ Add User</button>
                        </div>
                    </div>

                    <div className="users-list">



                        <table className="table">
                            <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date Created</th>
                                <th>Active</th>
                                <th>Role</th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.users.map( (user, key) => {
                                return   <UsersListItem  key={key} user={user} />
                            })}

                            </tbody>
                        </table>

                    </div>
                </div>

            );

        }

    }
}