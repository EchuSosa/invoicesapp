import React from "react";
import Button from "../buttons/default";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useTheme } from "../context/theme-context";

export default function FormDialog({
  open,
  setOpen,
  title,
  children,
  onClick,
  buttonText = "Delete",
  showDialogActions = true,
}) {
  const { themeMode } = useTheme();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(false);
    onClick();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: themeMode ? "#0C0E16" : "#FFFFFF",
            color: themeMode ? "white" : "black",
          },
        }}
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        {showDialogActions && (
          <DialogActions>
            <Button onClick={handleClose} color="primary" text={"Cancel"} />
            <Button
              onClick={handleClick}
              text={buttonText}
              backgroundColor={"#EC5757"}
              hoverColor={"#EA899A"}
            />
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
