import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search for Artist, Songs or Albums" />
      </div>

      <div className="header__right">
        <Avatar scr="" alt=""></Avatar>
        <h4>Andrew Le</h4>
      </div>
    </div>
  );
}
