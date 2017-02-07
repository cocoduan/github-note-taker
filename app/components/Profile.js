import React from "react";
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import ReactFireMixin from 'reactfire';
import * as firebase from "firebase";
import helpers from '../utils/helpers';

// getInitialState
// display variable in jsx is using {}

// everything that get passed from the parent component, will be accessed using this.props.xxx in the child component
// here this.props.username will be the username that gets passed from the routers

// will use Repos, UserProfile and Notes child components

// mixins: take the this instance and add functions from reactfire on to that

// helpers promise uses Axios to make rest call

// componentWillReceiveProps: when props update happens i.e. router changes
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
            apiKey: "AIzaSyDJGCMcCm-LA8Y657ujBFxVY3x6jEvIJRY",
            authDomain: "first-react-app-82694.firebaseapp.com",
            databaseURL: 'https://first-react-app-82694.firebaseio.com/'
        };
        firebase.initializeApp(config);

        this.init(this.props.params.username);
    },

    componentWillUnmount() {
        this.unbind('notes');
    },

    componentWillReceiveProps(nextProps) {
        // console.log("nextProps is : ", nextProps);
        this.unbind('notes');
        this.init(nextProps.params.username);
    },

    handleAddNote: function(newNote) {
        this.ref.child("Notes").child(this.state.notes.length).set(newNote);
    },

    init(username) {
        this.ref = firebase.database().ref("users").child(username);
        const childRef = this.ref.child("Notes");
        this.bindAsArray(childRef, 'notes');

        helpers.getGithubInfo(username).then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });
        });
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
                    <Notes username={this.props.params.username}
                           notes={this.state.notes}
                           addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

export default Profile;