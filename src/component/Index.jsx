import React from "react";
import hljs from "highlight.js";
import "./Index.css";

var codes = `
while (true) {
    try {
        living();
    } catch (e Exception) {
        faceTogether();
    } finally {
        ours.love++;
    }
}
`;

var Index = React.createClass({
    handleClick(e) {
        e.preventDefault();
        if (this.state.text === "Love Enable") {
            this.setState(this.getInitialState());
        } else {
            this.setState({text: "Love Enable", className: "btn btn-danger btn-lg", display: "block"});
        }
    },
    componentDidMount() {
        hljs.initHighlightingOnLoad();
    },
    getInitialState() {
        return {className: "btn btn-default btn-lg", text: "Love Disable", display: "none"};
    },
    render() {
        return(
            <div className="center-box" style={{width: 600}}>
                <div style={{textAlign: "center"}} className="row">
                    <button onClick={this.handleClick} style={{fontSize: 18}} type="button" className={this.state.className}>
                        {this.state.text}
                    </button>
                </div>
                <br />
                <div style={{display: this.state.display}} className="row">
                    <pre><code className="java">{codes}</code></pre>
                </div>
            </div>
        );
    }
});

export default Index;
