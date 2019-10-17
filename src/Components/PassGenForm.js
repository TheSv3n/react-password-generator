import React, { Component } from "react";
import { ProductConsumer } from "../Context";

export default class PassGenForm extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-12 col-lg-12 text-center">
                  <div className="form-bordered mt-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 text-center form-title">
                          Set Variables and Generate
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 mx-auto">
                          Characters:
                          <select
                            value={value.length}
                            onChange={value.handleChangeLength}
                          >
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                          </select>
                        </label>
                        <label className="col-2 mx-auto">
                          Include Uppercase:
                          <input
                            name="upperCase"
                            type="checkbox"
                            checked={value.upperCase}
                            onChange={value.handleInputChange}
                          />
                        </label>
                        <label className="col-2 mx-auto">
                          Include numbers:
                          <input
                            name="numbers"
                            type="checkbox"
                            checked={value.numbers}
                            onChange={value.handleInputChange}
                          />
                        </label>
                        <label className="col-2 mx-auto">
                          Include symbols:
                          <input
                            name="symbols"
                            type="checkbox"
                            checked={value.symbols}
                            onChange={value.handleInputChange}
                          />
                        </label>
                      </div>
                      <div className="row">
                        <button
                          type="submit"
                          onClick={value.generatePassword}
                          className="btn btn-block btn-primary col-11 mx-auto mt-1"
                        >
                          Generate
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-11 mx-auto col-md-11 col-lg-11 text-center my-4 password-text">
                          {value.password}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}
