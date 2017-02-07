import React from "react";
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import * as firebase from "firebase";
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

// getInitialState
// display variable in jsx is using {}

// everything that get passed from the parent component, will be accessed using this.props.xxx in the child component
// here this.props.username will be the username that gets passed from the routers

// will use Repos, UserProfile and Notes child components

// mixins: take the this instance and add functions from reactfire on to that

// helpers promise uses Axios to make rest call

// componentWillReceiveProps: when props update happens i.e. router changes

// constructor(props) and set initial state in the constructor

// don't forget to call super(props); before using this keyword!!

const base = Rebase.createClass({
    apiKey: "AIzaSyDJGCMcCm-LA8Y657ujBFxVY3x6jEvIJRY",
    authDomain: "first-react-app-82694.firebaseapp.com",
    databaseURL: 'https://first-react-app-82694.firebaseio.com'
});

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            bio: {},
            repos: []
        };
    }

    componentDidMount() {
        this.init(this.props.params.username);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    }

    handleAddNote(newNote) {
        base.post(`/users/${this.props.params.username}/Notes`, {
            data: this.state.notes.concat(newNote)
        })
    }

    init(username) {
        this.ref = base.bindToState(`/users/${username}/Notes`, {
            context: this,
            state: 'notes',
            asArray: true
        });

        getGithubInfo(username).then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });
        });
    }

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
                           addNote={(note) => this.handleAddNote(note)} />
                </div>
            </div>
        )
    }
}