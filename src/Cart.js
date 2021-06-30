import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price : 1000,
                    title : 'Mobile Phone',
                    quantity : 50,
                    url : '',
                    id : 1
                },
                {
                    price : 20999,
                    title : 'Laptop',
                    quantity : 10,
                    url : '',
                    id : 2
                },
                {
                    price : 90000,
                    title : 'Watch',
                    quantity : 990,
                    url : '',
                    id : 3
                },
            ]
        }
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((item) => { return <CartItem product = {item} key={item.id}/>})}    
            </div>
        )
    }
}

export default Cart;
