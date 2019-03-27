import React, { Component } from "react";
import { Icon, Badge, Button, Text, Content } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class CartButton extends Component {
  getItemsLength = () => {
    return this.props.items
      .map(item => item.quantity)
      .reduce((acc, a) => acc + a, 0);
  };
  render() {
    return (
      <Button transparent badge>
        <Text>
          <Text>{this.getItemsLength()}</Text>
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="shoppingcart"
            type="AntDesign"
          />
        </Text>
      </Button>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
export default withNavigation(connect(mapStateToProps)(CartButton));
