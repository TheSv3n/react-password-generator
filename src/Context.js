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

  getCharacter = charCodeArray => {
    let randomInt = Math.floor(Math.random() * (charCodeArray.length - 0)) + 0;
    return charCodeArray[randomInt];
  };

  getCharCodes = (min, max) => {
    let tempCodes = [];
    for (var i = min; i <= max; i++) {
      tempCodes.push(i);
    }
    return tempCodes;
  };

  generatePassword = () => {
    let intLength = parseInt(this.state.length, 10);
    let tempPassword = [];
    let needsSymbol = false;
    let needsNumber = false;
    let needsUpper = false;

    //lowercase: 97 - 122
    //uppercase: 65 - 90
    //Numbers: 48 - 58

    let charCodes = [...this.getCharCodes(97, 122)];
    if (this.state.upperCase) {
      charCodes = [...charCodes, ...this.getCharCodes(65, 90)];
    }
    if (this.state.numbers) {
      charCodes = [...charCodes, ...this.getCharCodes(48, 57)];
    }
    if (this.state.symbols) {
      charCodes = [...charCodes, ...this.getCharCodes(33, 47)];
    }

    do {
      tempPassword = [];
      needsUpper = this.state.upperCase;
      needsNumber = this.state.numbers;
      needsSymbol = this.state.symbols;
      for (var i = 0; i < intLength; i++) {
        let charCode = this.getCharacter(charCodes);
        tempPassword.push(String.fromCharCode(charCode));
        if (charCode >= 65 && charCode <= 90) {
          needsUpper = false;
        }
        if (charCode >= 48 && charCode <= 57) {
          needsNumber = false;
        }
        if (charCode >= 33 && charCode <= 47) {
          needsSymbol = false;
        }
      }
      console.log(
        `needs up: ${needsUpper}, needs num: ${needsNumber}, needs symbol: ${needsSymbol}`
      );
    } while (needsUpper || needsNumber || needsSymbol);

    tempPassword = tempPassword.join("");
    console.log(tempPassword);

    this.setState({ password: tempPassword });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          handleChangeLength: this.handleChangeLength,
          generatePassword: this.generatePassword
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
