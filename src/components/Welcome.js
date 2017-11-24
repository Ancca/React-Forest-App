import React, { Component } from 'react'
import language from '../Language';

class Welcome extends Component {

    constructor(props) {
        super(props);

        // Instantiate the language class for use on the app.
        this.language = new language("English");
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="text-center welcome-message">
                        <h1 className="display-3">{this.language.appName}</h1>
                        <p className="lead">Team 12: Mark Barrett, Valtteri Juutilainen, Tuomo Kinnunen.</p>
                        <button className="btn btn-success" onClick={this.props.openApp}>Open App <i className="fa fa-arrow-right" aria-hidden="true"></i></button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome