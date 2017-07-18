import React from 'react';

export default class DomainsListItemHidden extends React.Component{

    constructor(props){
        super(props);

        this.domain = this.props.domain;

        // this.state = {
        //     domains : null
        // }
    }

    render() {


        return (

            <tr className="hidden row-bottom">
                <td colSpan="8">
                    <div className="row-bottom-content">
                        <button className="button is-info">Renew this domain</button>
                        <button className="button is-info">Add SSL Certificate</button>
                    </div>
                </td>
            </tr>

        );

    }
}