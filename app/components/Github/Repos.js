import React from "react";

// Note: .isRequired not .required
// key={index} is required on <li> element

export default class Repos extends React.Component {
    render() {
        let {repos} = this.props;
        repos = repos.map((repo, index) => (
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p>{repo.description}</p>}
                </li>
            )
        );
        return (
            <div>
                <h3> User Repos </h3>
                <ul className="list-group">{repos}</ul>
            </div>
        )
    }
}
Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
};