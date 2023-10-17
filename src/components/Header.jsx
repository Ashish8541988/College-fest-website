import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

    function showMenu() {
        var navLinks = document.getElementById("Header");
        navLinks.style.left = "0";
    }
    function hideMenu() {
        var navLinks = document.getElementById("Header");
        navLinks.style.left = "-60%";

    }





    return (
        <div className="header">
            <img className="logoName" src="/Docouments/sac.png" height={50} style={{ margin: "10px" }}></img>
            <div className="Header" id="Header">

                <i className="fa-solid fa-bars" id="social1" onClick={showMenu} ></i>


                <i className="fa-solid fa-xmark" id="social" onClick={hideMenu} ></i>
                <li className="navbar"><Link className="link" to="/">Home</Link></li>

                <li className="navbar"><Link className="link" to="/Event">Event</Link></li>
                <li className="navbar"><Link className="link" to="/Club">Clubs</Link></li>
                <li className="navbar"><Link className="link" to="/About">About</Link></li>
                {/* <li className="navbar"><Link className="link"  to="/Conatct">CONTACT</Link></li> */}

            </div>


        </div>

    )
}

export { Header };