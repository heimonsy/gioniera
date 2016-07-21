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
            var f = function(i, func) {
                return function() {
                    var state = this.getInitialState();
                    state.processDisplay = "block";
                    state.process = i + "%";
                    this.setState(state);
                    if(i == 100){
                        return;
                    }
                    window.setTimeout(func(i+1, func), 30);
                }.bind(this);
            }.bind(this);
            f(0, f)();
        }
    },
    componentDidMount() {
        hljs.initHighlightingOnLoad();
    },
    getInitialState() {
        return {className: "btn btn-default btn-lg", text: "Love Disable", processDisplay: "none", codesDisplay: "none", process: "0%"};
    },
    render() {
        if (this.state.process === "100%") {
            window.setTimeout(function() {
                console.log(this.state.process);
                this.setState({text: "Love Enable", className: "btn btn-danger btn-lg", processDisplay: "none", codesDisplay: "block", process: "0%"});
            }.bind(this), 1000);
        }
        return(
            <div className="center-box" style={{width: 600}}>
                <div style={{textAlign: "center"}} className="row">
                    <button onClick={this.handleClick} style={{fontSize: 18}} type="button" className={this.state.className}>
                        {this.state.text}
                    </button>
                </div>
                <div className="row" style={{display: this.state.processDisplay}}>
                    <br />
                    <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" style={{width: this.state.process}}></div>
                    </div>
                </div>
                <br />
                <div style={{display: this.state.codesDisplay}} className="row">
                    <pre><code className="java">{codes}</code></pre>
                </div>
            </div>
        );
    }
});

export default Index;
