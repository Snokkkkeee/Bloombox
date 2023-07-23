import React from "react";

import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  let currentPath = location.pathname;
  let validPaths = ["/", "/main", "/analytics", "/mynotifications"];

  if (validPaths.includes(currentPath)) {
    return null;
  } else {
    // Return your "NotFound" component
    return <div>Page not found</div>
  }
}


export default NotFound;
