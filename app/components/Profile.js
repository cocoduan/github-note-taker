import React from "react";
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import ReactFireMixin from 'reactfire';
import * as firebase from "firebase";

// getInitialState
// display variable in jsx is using {}

// everything that get passed from the parent component, will be accessed using this.props.xxx in the child component
// here this.props.username will be the username that gets passed from the routers

// will use Repos, UserProfile and Notes child components

// mixins: take the this instance and add functions from reactfire on to that
const Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState() {
        return ({
            notes: [1,2,3],
            bio: {
                name: 'Coco Duan'
            },
            repos: ["a","b","c"]
        });
    },
    componentDidMount() {
        const config = {
            apiKey: "",
            authDomain: "first-react-app-82694.firebaseapp.com",
            databaseURL: 'https://first-react-app-82694.firebaseio.com/'
        };
        firebase.initializeApp(config);


        const childRef = firebase.database().ref("users").child(this.props.params.username).child("Notes");
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount() {
        this.unbind('notes');
    },
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes username={this.props.params.username} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
});

export default Profile;