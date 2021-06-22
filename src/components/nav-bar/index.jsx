import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import UserImage from "../../assets/img/image-avatar.jpg";

import IconMoon from "../../assets/icons/icon-moon";
import IconSun from "../../assets/icons/icon-sun";
import IconLogo from "../../assets/icons/icon-logo.js";

const NavBar = () => {
  const { themeMode, setThemeMode } = useTheme();
  const classes = useStyles({ themeMode });

  const handleClick = () => {
    setThemeMode(!themeMode);
  };

  const IconComponent = () => {
    return (
      <button className={classes.button} onClick={handleClick}>
        {themeMode ? <IconMoon /> : <IconSun />}
      </button>
    );
  };

  return (
    <div
      className={classes.root}
    >
      <div className={classes.top}>
        <Link to="/">
          <div className={classes.logo}>
            <IconLogo />
          </div>
        </Link>
        <IconComponent />
      </div>{" "}
      <div className={classes.divider}></div>
      <div className={classes.bottom}>
        <Avatar alt="User avatar" src={UserImage} />
      </div>
    </div>
  );
};

export default NavBar;
