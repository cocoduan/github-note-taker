import React from "react";
import NoteList from './NoteList';
import AddNote from './AddNote';

// notes come from Profile -> Notes -> NoteList
// import path should be './NoteList', not 'NoteList', because ./ indicates our own staff, otherwise it's react lib staff
const Notes = ({username, notes, addNote}) => {
    return (
        <div>
            <h3>Notes for: {username}</h3>
            <AddNote username={username} addNote={addNote}></AddNote>
            <NoteList notes={notes}></NoteList>
        </div>
    )
};

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Notes;
