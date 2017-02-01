import React from "react";

// Note: .isRequired not .required
const Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
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