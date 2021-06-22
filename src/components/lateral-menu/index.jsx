import React from "react";
import clsx from "clsx";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconPlus from "../../assets/icons/icon-plus";

const TemporaryDrawer = ({ buttonText, buttonWithIcon, children }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={classes.button}
            onClick={toggleDrawer(anchor, true)}
            startIcon={
              buttonWithIcon && (
                <div className={classes.icon}>
                  <IconPlus />
                </div>
              )
            }
          >
            {buttonText}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
