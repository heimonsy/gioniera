import React from "react";

var App = React.createClass({
    render() {
        return(
            <div style={{
                marginTop: 6
            }}> {this.props.children} </div>
        );
    }
});

export default App;
