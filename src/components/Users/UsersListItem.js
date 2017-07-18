import React from 'react';
import {Link} from 'react-router-dom'

export default class UsersListItem extends React.Component{

    constructor(props){
        super(props);

        this.user = this.props.user;

        // this.state = {
        //     users : null
        // }
    }


    render() {


        return (

            <tr>
                <td>{this.user.user_id}</td>
                <td><Link to={`/users/${this.user.user_id}`} >{this.user.user_username}</Link></td>
                <td>{this.user.user_firstname + ' ' + this.user.user_lastname}</td>
                <td>{this.user.user_email}</td>
                <td>{this.user.user_phone}</td>
                <td>{this.user.user_date_created}</td>
                <td>{this.user.user_active ? 'Yes' : 'No'}</td>
                <td>{this.user.user_role}</td>
            </tr>


        );

    }
}