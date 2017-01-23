import React from "react";

const Repos = React.createClass({
    render() {
        return (
            <div>
                <p>Repos</p>
                <p>Repos: {this.props.repos}</p>
            </div>
        )
    }
});

export default Repos;