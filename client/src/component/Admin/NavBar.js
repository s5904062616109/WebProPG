import React, { Component } from "react";
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Admin Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/admin/Home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/createProduct">Create Product </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/updateProduct">Edit Product </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/deleteProduct/">Delete Product </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
