import React from "react";
import SwaggerUI from "swagger-ui-react";

const RswaggerUI = ({ selectedApiDoc }) => {
  if (selectedApiDoc) {
    return <SwaggerUI url={selectedApiDoc.url} docExpansion={"list"} />;
  } else {
    return <div>Data Not Found</div>;
  }
};

export default RswaggerUI;
