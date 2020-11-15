import React from "react";
import {Link, Router} from 'react-router-dom';

const Navigation = (props) => {
    return (
      <nav id="menu" className="navbar navbar-default ">  {/* add  'navbar-fixed-top' to keep it on top*/}
        <div className="container collapse navbar-collapse" >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">About the project</Link>
                </li>
                <li>
                  <Link to={"/aboutMe"}>About Me</Link>
                </li>
                <li>
                    <Link to={"/Recipes"} className="page-scroll">Recipes</Link>
                    <ul className="dropdown">
                      <li><a href="#"> basic</a></li>
                      <li><a href="#"> South East Asian</a></li>
                    </ul>
                </li>
                <li>
                  <Link to={"/tips"}>Tips</Link>
                </li>
              </ul>
            </div>
      </nav>
    );
}

export default Navigation;
