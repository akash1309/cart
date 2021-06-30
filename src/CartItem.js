import React from 'react';

class CartItem extends React.Component{
    

    increaseQuantity = () => {
        console.log('this',this.state);
        this.state.quantity = this.state.quantity + 1;
        
    }
    render(){
        //const {price, title, quantity} = this.state;
        const {price, title, quantity} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>{title}</div>
                    <div style={ {color : '#777'}}>Rs {price}</div>
                    <div style={ {color : '#777'}}>Qty: {quantity}</div>
                    <div>
                        { /**  Buttons  **/}
                        <img 
                            alt = "decrease" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            className="action-icons" 
                        />
                        <img 
                            alt = "increase" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            className="action-icons" 
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            alt = "delete" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                            className="action-icons" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    images: {
        height : 100,
        width : 100,
        borderRadius : 4,
        backgroundColor : '#ccc'
    }
}

export default CartItem;