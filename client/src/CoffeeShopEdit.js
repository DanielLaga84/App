import React, {Component} from "react";
import {Link, withRouter } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label} from "reactstrap";

class CoffeeShopEdit extends Component {

    emptyItem = {
        name: ``,
        address: ``,
        phone: ``,
        priceOfCoffee: ``,
        powerAccessible: ``,
        internetRealiability: ``
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            errorMessage: null,
            isCreate: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

    }

}