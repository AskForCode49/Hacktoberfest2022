import React, {Component} from 'react';
import Rect from "./rect";
import Rects from "./rects";
import mergeSort from '../algorithms/mergeSort';
import heapSort from "../algorithms/heapSort";
import {quickSortRecursive} from "../algorithms/quickSortRecursive";
import Navbar from "./navbar";
import Menu from "./menu";

class RecursiveSort extends Component {
    state = {
        count: 20,
        rects: [],
        speed: 50,
        isRunning: false,
        algo: 0
    }

    constructor() {
        super();
    }

    componentDidMount() {
        var rects = getInitialRects(this.state.count);
        this.setState({rects});
        /* var rects2 = rects.slice();
         console.log(rects2);
         rects = mergeSort(rects);
         console.log(rects);*/

    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Menu
                    disable={this.state.isRunning}
                    onViusalize={this.handleSort}
                    onRandomize={this.handleRandomize}
                    onRefresh={this.handleRefresh}
                    onCountChange={this.handleCountChange}
                    onAlgoChanged={this.handleAlgoChanged}
                    onSpeedChange={this.handleSpeedChanged}
                />
                <div className=' justify-content-center'>
                    <Rects
                        rects={this.state.rects}
                    />

                </div>
            </React.Fragment>
        );
    }

    handleRandomize = () => {
        const rect = getInitialRects(this.state.count);
        this.setState({rects: rect});
    }
    handleRefresh = () => {
        const rects = this.state.rects;
        for (let i = 0; i < rects.length; i++) {
            const rect = {...rects[i], isSorted: false, isSorting: false}
            rects[i] = rect;
        }
        this.setState({rects});
    }
    handleCountChange = (val) => {
        this.setState({count: val});
        this.handleRandomize();
    }
    handleAlgoChanged = (pos, val) => {
        if (pos === 0) {
            // console.log("sup 0");
            this.setState({algo: val});
        }
    }
    handleSpeedChanged = (val) => {
        const speed = (110 - val);
        this.setState({speed});
    }

    handleSort = () => {

        this.setState({isRunning: true});
        let steps;
        let rects2;
        switch (this.state.algo) {

            case 0:
                steps = mergeSort(this.state.rects);
                this.handleMerge(steps);
                break;
            case 1:
                rects2 = this.state.rects.slice();
                steps = heapSort(rects2);
                this.handleHeap(steps);
                break;
            case 2:
                rects2 = this.state.rects.slice();
                steps = quickSortRecursive(rects2);
                this.handleQuick(steps);
                break;
            default:
        }


    }

   

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getInitialRects = (tot) => {
    const rects = [];
    for (let i = 0; i < tot; i++) {
        rects.push(getRect());
    }
    return rects;
}
const getRect = () => {
    return {
        width: Math.floor(Math.random() * 200) + 50,
        isSorted: false,
        isSorting: false,
        isLeft: false,
        isRight: false
    }
}

export default RecursiveSort;
