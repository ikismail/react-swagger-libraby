import React, { Component } from "react";
import SwaggerUI from "swagger-ui-react";

export default class RswaggerUI extends Component {
  render() {
    if (this.props.selectedApiDoc) {
      return (
        <SwaggerUI url={this.props.selectedApiDoc.url} docExpansion={"list"} />
      );
    } else {
      return <div>Data Not Found</div>;
    }
  }
}
