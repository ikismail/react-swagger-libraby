import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-sticky">
        <div className="text-center">
          <h4>ikismail API Library</h4>
        </div>
        <ListGroup variant="flush">
          {(() => {
            return this.props.apilist.map(api => {
              return (
                <ListGroup.Item
                  key={api.name}
                  className={"mt-2"}
                  onClick={() => this.props.onClick(api)}
                  active={this.props.selectedApiDoc === api}
                >
                  {api.name}
                </ListGroup.Item>
              );
            });
          })()}
        </ListGroup>
      </div>
    );
  }
}
