import React from "react";

// use light weight functions to return whatever the dom looks like

const UserProfile = ({bio}) => {
    return (
        <div>
            <h3> User Profile </h3>
            <div>
                {bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
                {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
                {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
                {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
                {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
                {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
                {bio.followers >= 0 && <li className="list-group-item">Followers: {bio.followers}</li>}
                {bio.following >= 0 && <li className="list-group-item">Following: {bio.following}</li>}
                {bio.public_repos >= 0 && <li className="list-group-item">Public Repos: {bio.public_repos}</li>}
                {bio.blog && <li className="list-group-item">Blog: <a href={bio.blog}> {bio.blog}</a></li>}
            </div>
        </div>
    )
};
export default UserProfile;

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
};