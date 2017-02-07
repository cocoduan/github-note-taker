import React from 'react';
import {History} from 'react-router';

// history.pushState
// profile/:username -> /profile/:username
const SearchGithub = React.createClass({
    mixins: [History],

    getRef: function(ref) {
        this.usernameRef = ref;
    },

    handleSubmit: function() {
        let username = this.usernameRef.value;
        this.usernameRef.value = '';
        this.history.pushState(null, `/profile/${username}`);
    },

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-md-7">
                        <input type="text" className="form-control" ref={this.getRef} />
                    </div>
                    <div className="form-group col-md-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default SearchGithub;