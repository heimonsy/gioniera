import React from "react";

import Heart  from "./Heart";

var NOT_START = -30;

var MAX_HEIGHT = 500;

class HeartClass {
    constructor(top, left, rotate) {
        this.top = top;
        this.left = left;
        this._rotate = rotate;
        this.sink = random(5)+1;
        this.sway = abrandom(14);
        this.isRotateLeft = random(10) < 5;
    }
    setRotate(rotate) {
        this._rotate = rotate;
    }
    rotate() {
        return "rotate("+this._rotate+"deg)";
    }
    ended(){
        return this.top >= MAX_HEIGHT;
    }
    move() {
        // sink
        this.top += this.sink;
        // change rotate
        if(this.isRotateLeft) {
            this._rotate++;
        } else {
            this._rotate--;
        }
        if(this._rotate<-ROTATE_RANGE) {
            this.isRotateLeft=true;
        } else if(this._rotate>ROTATE_RANGE) {
            this.isRotateLeft=false;
        }
        // sway
        if(this.sway === 0) {
            this.sway = abrandom(14);
        }
        if(this.sway<0) {
            this.left--;
            this.sway++;
        } else if(this.sway>0) {
            this.left++;
            this.sway--;
        }
        var width = window.innerWidth;
        var rangeLeft = Math.floor(width*0.15);
        var rangeRight = Math.floor(width*0.7)+rangeLeft;
        if(this.left>=rangeRight) {
            this.sway = -random(24);
        } else if(this.left<=rangeLeft) {
            this.sway = random(24);
        }
        if(this.ended()) {
            this.top = NOT_START;
            this.left = randomStartLeft();
        }
    }
}

var ROTATE_RANGE = 30;

function random(range) {
    return Math.floor(range*Math.random());
}

function ab(num) {
    if (random(10) < 5) {
        return -num;
    }
    return num;
}

function abrandom(range) {
    return ab(random(range));
}

function randomStartLeft() {
    var width = window.innerWidth;
    var range = Math.floor(width*0.7);
    var num = random(range) + Math.floor(width*0.15);
    return num;
}

var HeartRain = React.createClass({
    propTypes: {
        nums: React.PropTypes.number.isRequired
    },
    componentDidMount() {
        var moveStep = function(i, next) {
            i++;
            var hearts = this.state.heartsProps.map(function(props, index) {
                if(props.top == NOT_START) {
                    var n = random(this.props.nums*3.5);
                    if(n === index){
                        props.move();
                    }
                } else {
                    props.move();
                }
                return (<Heart key={"HR"+index} left={props.left} top={props.top} rotate={props.rotate()} ></Heart>);
            }.bind(this));
            this.setState({
                heartsProps: this.state.heartsProps,
                hearts: hearts
            });
            window.setTimeout(function() {
                next(i, next);
            }, 50);
        }.bind(this);
        moveStep(0, moveStep);
    },
    getInitialState() {
        var heartsProps = [];
        for(var i=0; i<this.props.nums; i++) {
            heartsProps.push(new HeartClass(NOT_START, randomStartLeft(), abrandom(ROTATE_RANGE)));
        }
        var hearts = heartsProps.map(function(props, index) {
            return (<Heart key={"HR"+index} left={props.left} top={props.top} rotate={props.rotate()} ></Heart>);
        });
        return {heartsProps, hearts};
    },
    render() {
        return(
            <div>{this.state.hearts}</div>
        );
    }
});

export default HeartRain;
