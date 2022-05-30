import React from "react";
import { NavLink } from "react-router-dom";
import contact from "../src/Assets/images/contact";
import deals from "../src/Assets/images/deals";
import product from "../src/Assets/images/product";
import Logo from "../src/Assets/images/logo.png";
import Settings from "../src/Assets/images/settings";
import Profile from "../src/Assets/images/profile.jpeg";
import "./SideNavbar.css";

export default function SideNavbar() {
  const routeLink = [
    {
      activeClassName: "is-active",
      to: "/deals",
      exact: true,
      image: deals,
      altIamge: "De",
    },
    {
      activeClassName: "is-active",
      to: "/contacts",
      image: contact,
      altIamge: "Co",
    },
    {
      activeClassName: "is-active",
      to: "/products",
      image: product,
      altIamge: "Pro",
    },
    {
      activeClassName: "is-active",
      to: "/settings",
      image: Settings,
      altIamge: "Set",
    },
    // {
    //   activeClassName:"is-active",
    //   to:"/etc",
    //   exact: true,
    //   image: '',
    //   altIamge: 'E'
    // }
  ];

  return (
    <section className="side-nav">
      <div className="side-nav--logo">
        <img src={Logo} alt="company logo" />
      </div>
      <div className="side-nav--link">
        {routeLink.map((link) => (
          <NavLink
            className="navbar-item d-flex justify-content-center align-items-center"
            {...link}
          >
            {" "}
            <div className="side-nav--icon">
              {link.image ? link.image() : link.altIamge}
            </div>{" "}
          </NavLink>
        ))}
      </div>
      <div className="deal-contact-sidenav">
        
          <img className= "contact-pic-sidenav"src={Profile} alt="profile"></img>
        </div>
      
    </section>
  );
}
