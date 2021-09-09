import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search for Artist, Songs or Albums" />
      </div>

      <div className="header__right">
        <Avatar scr={user?.images[0]?.url} alt=""></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
