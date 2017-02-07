import React from "react";

// note['.value'] because firebase creates each object as {key: xxx, .value: xxx}
// common mistake: return () not return {}
const NoteList = React.createClass({
    render() {
        // console.log(this.props.notes);
        const notes = this.props.notes.map((note, index) => {
            return <li className="list-group-item" key={index}>{note['.value']}</li>
        });

        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
});
export default NoteList;