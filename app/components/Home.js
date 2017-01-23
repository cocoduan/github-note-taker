import React from "react";

// use className not class
const Home = React.createClass({
    render() {
        return (
            <h2 className="text-center">
                Search by Github username
            </h2>
        )
    }
});

export default Home;