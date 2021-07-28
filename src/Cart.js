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
    handleIncreaseQuantity = (product) => {
        console.log('Heyy please inc the qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);
    
        products[index].quantity += 1;
    
        this.setState({
          products
        })
      }
    
    handleDecreaseQuantity = (product) => {
        console.log('Heyy please dec the qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].quantity > 0)
            products[index].quantity -= 1;

        this.setState({
            products
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((item) => 
                    { return(
                        <CartItem 
                            product = {item} 
                            key={item.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity} 
                            onDecreaseQuantity={this.handleDecreaseQuantity}/>
                        ) 
                    })}    
            </div>
        )
    }
}

export default Cart;
