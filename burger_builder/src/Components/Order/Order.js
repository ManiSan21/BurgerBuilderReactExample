import React from 'react';
import classes from './Order.css';
import Burger from '../Burger/Burger';
//import Button from '@material-ui/core/Button';

const order = (props) => (
    <div className={classes.Order}>        
        <p>
            Ingredients: <br/>
            Bacon (<strong>{props.ingredients.bacon}</strong>)<br/>
            Cheese (<strong>{props.ingredients.cheese}</strong>)<br/>
            Meat (<strong>{props.ingredients.meat}</strong>)<br/>
            Salad (<strong>{props.ingredients.salad}</strong>)
        </p>
        <p>Price: <strong>USD {props.price}</strong></p>
        <Burger ingredients={props.ingredients}/>
        {/* The Button is imported just like a normal component, but instead of importing it from one of our custom files,
            it has to be imported from Material UI. In this context, the variant attribute determines what kind of button it's
            going to be (could be fab, contained, etc.), and the color attribute is going to be the color assigned to the button.
            From what I've read, there are only 4 predetermined colors: default, inherit, primary and secondary.*/}
        {/*<Button variant="fab" color="primary">
            +
        </Button>*/}
    </div>
);

export default order;