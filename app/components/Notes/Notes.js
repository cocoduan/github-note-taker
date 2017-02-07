import React from "react";
import NoteList from './NoteList';
import AddNote from './AddNote';

// notes come from Profile -> Notes -> NoteList
// import path should be './NoteList', not 'NoteList', because ./ indicates our own staff, otherwise it's react lib staff
export default class Notes extends React.Component {
    render() {
        return (
            <div>
                <h3>Notes for: {this.props.username}</h3>
                <AddNote username={this.props.username} addNote={this.props.addNote}></AddNote>
                <NoteList notes={this.props.notes}></NoteList>
            </div>
        )
    }
}

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};
