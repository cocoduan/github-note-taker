import React from "react";

// note['.value'] because firebase creates each object as {key: xxx, .value: xxx}
// common mistake: return () not return {}

// const {notes} = this.props; destruct object!!

export default class NoteList extends React.Component {
    render() {
        // console.log(this.props.notes);
        let {notes} = this.props;
        notes = notes.map((note, index) => <li className="list-group-item" key={index}>{note}</li>);

        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}
