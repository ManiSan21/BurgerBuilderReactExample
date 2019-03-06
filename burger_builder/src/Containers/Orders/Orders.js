import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orderData: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {                    
                for(let key in response.data) {
                    this.state.orderData.push({...response.data[key], id: key});
                }                
                this.setState({loading: false});                                
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {        
        return(
            <div>               
                {this.state.orderData.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}                    
                        price={/*If you put a + sign in front of the prop when being passed,
                            it's gonna be passed as a number */order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);