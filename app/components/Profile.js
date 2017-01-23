import React from "react";
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";

// getInitialState
// display variable in jsx is using {}

// everything that get passed from the parent component, will be accessed using this.props.xxx in the child component
// here this.props.username will be the username that gets passed from the routers

// will use Repos, UserProfile and Notes child components
const Profile = React.createClass({
    getInitialState() {
        return ({
            notes: [1,2,3],
            bio: {
                name: 'Coco Duan'
            },
            repos: ["a","b","c"]
        });
    },
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes notes={this.state.notes}/>
                </div>
            </div>
        )
    }
});

export default Profile;