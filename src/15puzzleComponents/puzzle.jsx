import React, {Component} from 'react';
import Navbar from "./navbar";
import FlipMove from 'react-flip-move';
import SvgLines from 'react-mt-svg-lines';
import '../helpers/array_helpers';
import './style.css';
import {times} from 'lodash';

const FLIP_DURATION = 750;

class Puzzle extends Component {
    constructor() {
        super();
        this.state = {
            squares: times(16, i => ({
                value: i
            })),
        };
    }

    balsal = async () => {
        for (let i = 0; i < 15; i++) {
            this.setState({
                squares: this.state.squares.slice().swap(i, i + 1)
            });
            await sleep(500);
        }

    }

    render() {
        let classNames;
        return (
<div>


            </div>

        );
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default Puzzle;
