import React from "react";

var Heart = React.createClass({
    propTypes: {
        left: React.PropTypes.number.isRequired,
        top: React.PropTypes.number.isRequired,
        rotate: React.PropTypes.string.isRequired
    },
    render() {
        return(
            <div style={{
                zIndex: 1000000,
                position: "absolute",
                height: 30,
                width: 30,
                lineHight: 30,
                fontSize: 22,
                left: this.props.left,
                top: this.props.top,
                color: "red",
                msTransform: this.props.rotate,
                WebkitTransform: this.props.rotate,
                transform: this.props.rotate
            }}>
                <span className="glyphicon glyphicon-heart"></span>
            </div>
        );
    }
});

export default Heart;
