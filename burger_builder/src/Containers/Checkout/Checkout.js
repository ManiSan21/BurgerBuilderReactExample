import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }            
        }
        this.setState({ingredients: ingredients, price: price});
    }

    onCheckoutCancelled = () => {
        this.props.history.goBack();
    }   

    checkoutContinued = () => {         
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let finalPrice = Math.floor(this.state.price * 100) / 100;
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                    onCheckoutCancelled={this.onCheckoutCancelled} 
                    checkoutContinued={this.checkoutContinued}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={finalPrice} {...props}/>)}
                />
            </div>
        );
    }
}   

export default Checkout;