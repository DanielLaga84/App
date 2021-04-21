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
    this.state.isCreate = this.props.match.params.id === `new`;
    if (!this.state.isCreate) {
        const response = await this.props.api.getById(this.props.match.params.id);
        const coffeeShop = await response.json();
        this.setState({item: coffeeShop});
    }
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item, isCreate } = this.state;

        let result = isCreate ? await this.props.api.create(item) : await this.props.api.update(item);

        if (!result.ok) {
            this.setState({errorMessage: `Failed to ${isCreate ? 'create' : 'update'} record: ${result.status} ${result.statusText}`})
        } else {
            this.setState({errorMessage: null});
            this.props.history.push('/coffee-shops');
        }
    }
}
