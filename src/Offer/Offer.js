import React, { Component } from 'react';
import './Offer.css';

class Offer extends Component {

    constructor(props) {
        super(props);
        //
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Offer;
