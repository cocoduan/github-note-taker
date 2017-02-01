import React from "react";

const UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <div>
                <p>User Profile: </p>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>
        )
    }
});

export default UserProfile;