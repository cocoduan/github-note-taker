import React from "react";
import ReactDOM from "react-dom";

const Main = React.createClass({
    render: () => <div>Hello world</div>
});

ReactDOM.render(<Main />, document.getElementById('app'));