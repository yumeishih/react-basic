import React from "react";
import { Link } from "react-router";

import Footer from "../compomnents/layout/Footer";
import Nav from "../compomnents/layout/Nav";

export default class Layout extends React.Component {
    navigate() {
        this.props.router.push("/");
        /* Info
            this.props.history.pushState() and .replaceState() functions have been deprecated by react-router
        */
    }
  render() {
    const { router } =this.props;
    const { location } = this.props;
    const containerStyle = {
        marginTop: "60px"
    };
    console.log("layout");
    console.log(router.isActive("archives"));
    return (
        <div>
            <Nav location={location} />
            <div class="container" style={containerStyle}>
                <div class="row">
                    <div class="col-lg-12">
                        <h1>KillerNews.net</h1>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
  }
}