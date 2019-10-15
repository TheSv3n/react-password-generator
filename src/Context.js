import React, { Component } from "react";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    password: "",
    upperCase: false,
    numbers: false,
    symbols: false,
    length: "8"
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleChangeLength = event => {
    this.setState({ length: event.target.value });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          handleChangeLength: this.handleChangeLength
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
