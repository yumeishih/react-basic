import React from "react";

export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    const { date,filter } = this.props.location.query;
    const { article } = this.props.params;
    return (
        <div>
            <h1>Archives {article}</h1>
            <h4>date: {date}, filter {filter}</h4>
        </div>
    );
  }
}