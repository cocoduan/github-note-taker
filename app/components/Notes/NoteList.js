import React from "react";

// note['.value'] because firebase creates each object as {key: xxx, .value: xxx}
// common mistake: return () not return {}

// const {notes} = this.props; destruct object!!

// use light weight functions to return whatever the dom looks like

const NoteList = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map((note, index) => (
                <li className="list-group-item" key={index}>{note}</li>
            ))}
        </ul>
    )

};

export default NoteList;
