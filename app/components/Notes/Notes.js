import React from "react";
import NoteList from './NoteList';

// notes come from Profile -> Notes -> NoteList
// import path should be './NoteList', not 'NoteList', because ./ indicates our own staff, otherwise it's react lib staff
const Notes = React.createClass({
    render() {
        return (
            <div>
                <h3>Notes for: {this.props.username}</h3>
                <NoteList notes={this.props.notes}></NoteList>
            </div>
        )
    }
});

export default Notes;