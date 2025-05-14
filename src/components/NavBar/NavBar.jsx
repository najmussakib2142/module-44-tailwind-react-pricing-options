import React, { useState } from "react";
import Link from "./Link";
import { Menu, XIcon } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Homepage",
    path: "/Homepage",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between mx-7 my-3">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <XIcon className="md:hidden"></XIcon>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul className={`md:hidden bg-amber-200 text-black
             absolute duration-1000
              ${open ? 'top-10' : '-top-40'}`}>
            {links}
        </ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>

      <ul className="md:flex hidden ">
        {
            links
        }
        </ul>

      {/* <ul className="flex">
        {navigationData.map((route) => (
          <li className="mr-10">
            <a href="{route.path}">{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className='flex ml-5'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default NavBar;
