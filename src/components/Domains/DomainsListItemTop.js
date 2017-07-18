import React from 'react';
import {Link} from 'react-router-dom'

export default class DomainsListItemTop extends React.Component{

    constructor(props){
        super(props);

        this.domain = this.props.domain;

        // this.state = {
        //     domains : null
        // }
    }

    rowClickHandler(){

        const hiddenRow = this.topRow.nextSibling;
        hiddenRow.classList.toggle('hidden');
    }

    render() {


        return (

                <tr ref={(tr) => {this.topRow = tr}}>
                    <td>{this.domain.domain_name}</td>
                    <td>{this.domain.purchase_date}</td>
                    <td>{this.domain.active_since}</td>
                    <td>{this.domain.expiration_date}</td>
                    <td>{this.domain.has_ssl ? 'Yes' : 'No'}</td>
                    <td>{this.domain.autorenew ? 'Yes' : 'No'}</td>
                    <td>
                        {/*{this.domain.owner}*/}
                        <Link to="/users" >{this.domain.user_username}</Link>
                    </td>
                    <td><button className="button is-info" onClick={this.rowClickHandler.bind(this)}>Actions</button></td>
                </tr>


        );

    }
}