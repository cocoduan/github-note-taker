import React from "react";

// ref is used to get the input; this.note.value is the input value;

// this.props.addNote is the parent scoped func that gets passed to the child component; eventually it's called from
// child component so that we could achieve updating states of parent from child component

// because React.createClass will bind this for onClick={this.handleSubmit}; but when converting to class, we need to either
// bind this manually like onClick={this.handleSubmit.bind(this)}  or use fat arrow func like onClick={() => this.handleSubmit()}

export default class AddNote extends React.Component {
    handleSubmit() {
        const newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    }

    setRef(ref) {
        this.note = ref;
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add a new note"
                       ref={(ref) => this.setRef(ref)}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={() => this.handleSubmit()}>Submit</button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};