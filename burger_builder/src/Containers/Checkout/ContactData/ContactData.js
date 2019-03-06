import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mani Sandoval',
                address: {
                    street: 'TestStreet 1',
                    zipCode: '47562',
                    country: 'México'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'        
        }
        axios.post('/orders.json', order)
            //Shortened the syntax in the promises. If the response and err variables aren't being used, there's no need to use arrow functions. Just use what you need
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(this.setState({loading: false}));
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postalCode" placeholder="Your Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner/>;
        }
        return(
            <div className={classes.ContactData}> 
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;