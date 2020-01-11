import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = ({ apilist, selectedApiDoc, onClick }) => {
  return (
    <div className='sidebar-sticky'>
      <div className='text-center'>
        <h4>API Library</h4>
      </div>
      <ListGroup variant='flush'>
        {(() => {
          return apilist.map(api => {
            return (
              <ListGroup.Item
                key={api.name}
                className={"mt-2 mx-2"}
                onClick={() => onClick(api)}
                active={selectedApiDoc === api}>
                {api.name}
              </ListGroup.Item>
            );
          });
        })()}
      </ListGroup>
      <div style={{ position: "absolute", bottom: 0 }}>
        <div className='d-flex flex-column text-center'>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="m-auto"
            alt='logo'
            width='110'
            height='70'
          />
          <p className='ml-3 my-auto'>Developed by Mohammed Ismail</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
