import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar className="navbar">
        <Container className="navbarContainer">
          <Navbar.Brand className="Nav">
            <Link href="/">
              <img
                className="imgBrand"
                src="figma/mainLogoB.png"
                alt="Main Logo"
              ></img>
            </Link>
          </Navbar.Brand>

          <Nav className="searchNav me-auto">
            <form className="searchForm">
              <input type="text" name="" placeholder="Serch" />
              <button className="searchbutton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
          </Nav>

          <Nav className="Nav navlink">
            <Nav>
              <Link href="/deets">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Link>
            </Nav>

            <Nav>
              <Link href="/deets">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="navbarLink">
        <Container>
          <Navbar.Toggle
            className=" toggleLink"
            bg="dark"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="collapseLink" id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav>
                {" "}
                <Link href="/products">products</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Categories</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Favorites</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Famous</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Discounts</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Offers</Link>
              </Nav>
              <Nav>
                {" "}
                <Link href="/deets">Recent additions</Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
