import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import RswaggerUI from "../components/swaggerUI";
import { FilePath } from "../environment";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: FilePath,
      selectedApiDoc: undefined
    };
  }

  componentDidMount() {
    this.setState({ selectedApiDoc: this.state.apiList[0] });
  }

  onApiClick = value => {
    this.setState({ selectedApiDoc: value });
  };

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col className="col-md-2 d-none d-md-block sidebar">
            <Sidebar
              selectedApiDoc={this.state.selectedApiDoc}
              apilist={this.state.apiList}
              onClick={this.onApiClick}
            />
          </Col>
          <Col className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <RswaggerUI selectedApiDoc={this.state.selectedApiDoc} />
          </Col>
        </Row>
      </div>
    );
  }
}
