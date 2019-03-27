import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/cartActions";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button
          onPress={() => {
            this.props.checkout();
            alert("Thank you for shopping with us!");
          }}
          full
          danger
        >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: item => dispatch(actionCreators.checkout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
