import React from "react";

const Notes = React.createClass({
    render() {
        return (
            <div>
                <p>Notes</p>
                <p>Notes: {this.props.notes}</p>
            </div>
        )
    }
});

export default Notes;