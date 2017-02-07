import React from "react";
import SearchGithub from './SearchGithub';

// since using createClass, render needs to be function declaration (render() {} or render: function {}) instead of arrow function
export default class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <SearchGithub history={this.props.history}/>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}