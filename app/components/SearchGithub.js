import React from 'react';
import {History} from 'react-router';

// history.pushState
// profile/:username -> /profile/:username

// let route handles history and since SearchGithub lives under Main, so we can just pass this.props.history

export default class SearchGithub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    }

    handleSubmit() {
        const username = this.usernameRef.value;
        this.usernameRef.value = '';
        this.props.history.pushState(null, `/profile/${username}`);
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={() => {this.handleSubmit()}}>
                    <div className="form-group col-md-7">
                        <input type="text" className="form-control" ref={(ref) => {this.getRef(ref)}} />
                    </div>
                    <div className="form-group col-md-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        );
    }
}

SearchGithub.propTypes = {
    history: React.PropTypes.object.isRequired
};