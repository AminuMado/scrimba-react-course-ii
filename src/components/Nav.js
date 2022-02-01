import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className='nav'>
      <FontAwesomeIcon icon={faGlobe} />
      <h1>My Games Blog</h1>
    </div>
  );
}
export default Nav;
