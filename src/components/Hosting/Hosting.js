import React from 'react';

export default class Hosting extends React.Component{
    render(){
        return (
            <div>
                <h3>MY HOSTING</h3>

                <div className="hosting-list">

                    <div className="columns">
                        <div className="column is-2">Hosting Name: </div>
                        <div className="column">Standard Hosting 1 year</div>
                    </div>

                    <div className="columns">
                        <div className="column is-2">Server:</div>
                        <div className="column">Linux Ubuntu 14.4</div>
                    </div>

                    <div className="columns">
                        <div className="column is-2">Expires:</div>
                        <div className="column">April 9 2018 <strong>(10 months, 8 days left)</strong></div>
                    </div>

                </div>
            </div>

        );
    }
}