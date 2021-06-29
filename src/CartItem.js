import React from 'react';

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price : 1000,
            title : 'Phone',
            quantity : 1,
            url : ''
        }
    }
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>{this.state.title}</div>
                    <div style={ {color : '#777'}}>Rs {this.state.price}</div>
                    <div style={ {color : '#777'}}>Qty: {this.state.quantity}</div>
                    <div>
                        { /**  Buttons  **/}
                        <img alt = "increase" src="https://image.flaticon.com/icons/png/512/992/992683.png" className="action-icons" />
                        <img alt = "decrease" src="https://image.flaticon.com/icons/png/512/992/992651.png" className="action-icons" />
                        <img alt = "delete" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" className="action-icons" />
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