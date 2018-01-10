import React from "react";
import { Link } from "react-router"
export default class Layout extends React.Component {
    navigate() {
        this.props.router.push("/");
        /* Info
            this.props.history.pushState() and .replaceState() functions have been deprecated by react-router
        */
    }
  render() {
    return (
        <div>
            <h1>KillerNews.net</h1>
            {this.props.children}
            <Link to="archives" class="btn">archives</Link>
            <Link to="settings" class="btn">settings</Link>
            <button class = "btn" onClick = {this.navigate.bind(this)}>featured</button>
        </div>
    );
  }
}