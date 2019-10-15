import React, { Component } from "react";
import styled from "styled-components";

export default class Titlebar extends Component {
  render() {
    return (
      <NavWrapper className="navbar">
        <div className="mx-auto">React Password Generator</div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
    text-align: center !important;
  }
`;
