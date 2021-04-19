import React, {Component} from "react";
import {
    Alert,
    Button
} from "reactstrap";
import { Link} from "react-router-dom";

const CoffeeShop = (props) => (
    <div className="coffeeshop-container p-2 m-2 d-flex flex-column">
        <h3>{props.name}</h3>
        <div className="coffeeshop-body">
            <div className="subTitle-container">
                <div>Cost: ${props.priceOfCoffee} / cup</div>
                <div>Internet Reliability: {props.internetRealiability} / 5</div>
                <div>{props.powerAccessible ? "Power Accessible" : "Power NOT Accessible"}</div>
            </div>
            <div>{props.address}</div>
            <div>{props.phone}</div>
        </div>
        <div className="coffeeshop-footer">
            <Button color="secondary" tag={Link} to={"/coffeee-shops/" + props.id}>Edit</Button>
            <Button color="danger" onClick={() => props.remove(props.id)}>Delete</Button>
        </div>
    </div>
);

class CoffeeShopsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coffeeShops: [],
            isLoading: true,
            errorMessage: null
        };
        this.remove = this.remove.bind(this);
    }
}