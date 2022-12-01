import { NavLink } from "react-router-dom";
import React from 'react'

const Pagesnotfound = () => {
  return (
    <>
  <div className="notFound">
    <h1>OOPPs not found!</h1>

    <NavLink to ="/">
    <button>Go Back</button>

    </NavLink>
  </div>
    </>
  )
}

export default Pagesnotfound;
