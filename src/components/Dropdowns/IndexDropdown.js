import React from "react";
import { Link } from "react-router-dom";
// import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  // const openDropdownPopover = () => {
  //   createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
  //     placement: "bottom-start",
  //   });
  //   setDropdownPopoverShow(true);
  // };
  // const closeDropdownPopover = () => {
  //   setDropdownPopoverShow(false);
  // }; , setDropdownPopoverShow
  return (
    <>
       
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          // dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/settings"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Settings
        </Link>
        <Link
          to="/admin/tables"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tables
        </Link>
        <Link
          to="/admin/maps"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Maps
        </Link>
      
        <Link
          to="/admin/landing"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Landing
        </Link>
        <Link
          to="/admin/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Profile
        </Link>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/settings"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Settings
        </Link>
        <Link
          to="/admin/tables"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tables
        </Link>
        <Link
          to="/admin/maps"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Maps
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      
        <Link
          to="/landing"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Landing
        </Link>
        <Link
          to="/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Profile
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
