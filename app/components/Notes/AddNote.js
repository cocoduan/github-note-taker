import React from "react";

// ref is used to get the input; this.note.value is the input value;

// this.props.addNote is the parent scoped func that gets passed to the child component; eventually it's called from
// child component so that we could achieve updating states of parent from child component

const AddNote = React.createClass({

    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    setRef: function (ref) {
        this.note = ref;
    },
    handleSubmit: function () {
        const newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    },
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add a new note" ref={this.setRef}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }
});
export default AddNote;