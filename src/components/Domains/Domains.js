import React from 'react';
import DomainsListItemHidden from './DomainsListItemHidden'
import DomainsListItemTop from './DomainsListItemTop'

export default class Domains extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            domains : null
        }
    }

    getDomains(){

        fetch('http://localhost:9000/domains', {
            method: 'GET'
        })
            .then(function(response) {
                console.log(response);
                return response.json()
            })
            .then(function(body) {
                console.log(body);
                this.setState({
                    domains : body
                })

            }.bind(this))
            .catch(function(error){
                console.log(error)
            });

    }

    componentDidMount(){
        this.getDomains()
    }

    render(){

        if(this.state.domains === null ){
            return ( <div>loading...</div>)
        } else {

            return (
                <div>
                    <h3>MY DOMAINS</h3>

                    <div className="domains-list">

                        <table className="table">
                            <thead>
                            <tr>
                                <th>Domain</th>
                                <th>Purchase Date</th>
                                <th>Active Since</th>
                                <th>Expires</th>
                                <th>SSL Certificate</th>
                                <th>Autorenew</th>
                                <th>Owner</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.domains.map( (domain, key) => {
                                return (
                                    [
                                        <DomainsListItemTop  domain={domain} />,
                                        <DomainsListItemHidden domain={domain} />
                                    ]

                                )
                            })}

                            </tbody>
                        </table>

                    </div>
                </div>

            );

        }

    }
}