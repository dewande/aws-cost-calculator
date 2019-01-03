import React, { Component } from 'react';
import './Offers.css';
import DownloadButton from '../DownloadButton/DownloadButton'

class Offers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            offers: []
        };
        this.storagekey = "indexes";
        //proxyUrl
        if (typeof props.proxyUrl == "undefined") {
            this.proxyUrl = "https://cors-anywhere.herokuapp.com/";
        }
        else {
            this.proxyUrl = props.proxyUrl;
        }
        //awsUrl
        if (typeof props.awsUrl == "undefined") {
            this.awsUrl = "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json";
        }
        else {
            this.awsUrl = props.awsUrl;
        }
        //awsRegion
        if (typeof props.awsRegion == "undefined") {
            this.awsRegion = "eu-west-1";
        }
        else {
            this.awsRegion = props.awsRegion;
        }
        this.url = this.proxyUrl + this.awsUrl;
    }

    componentDidMount() {
        this.handleClick();
    }
    
    handleClick() {
        if (localStorage.hasOwnProperty(this.storagekey)) {
            var myJson = JSON.parse(localStorage.getItem(this.storagekey));
            this.setState({ offers: myJson.offers, date: myJson.publicationDate });
        } 
    }
    
    render() {
        return (
            <div>
            <DownloadButton url={this.url} storagekey={this.storagekey} onclick={this.handleClick}></DownloadButton>
            </div>
        );
    }
}

export default Offers;
