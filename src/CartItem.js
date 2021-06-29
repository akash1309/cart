import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>Phone</div>
                    <div style={ {color : '#777'}}>Rs 1000</div>
                    <div style={ {color : '#777'}}>Qty: 1</div>
                    <div>
                        { /**  Buttons  **/}
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