import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { logout } from "../../actions/auth";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import moment from "moment";
import {
  Badge,
  Button,
  Grid,
  Popper,
  Avatar,
  Paper,
  Grow,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { getNotification } from "../../actions/notificationActions";
import { API_BASE_URL, userData } from "../../utils/config";

import io from "socket.io-client";
import { SHOW_NOTIFICATION_BADGE } from "../../actions/constants";

import { refreshToken } from "../../actions/auth";

window.socket_client = io.connect(API_BASE_URL);

const isLoggedIn = () => {
  return !!userData;
};

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const refreshTokenLogout = { refreshToken: userData?.tokens?.refreshToken };

  const [open, setOpen] = useState(false);

  const showBadge = useSelector(
    (state) => state.notification.showNotificationBadge
  );

  // useEffect(() => {
  //   dispatch(getNotification(10, 1));
  // }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn()) {
      window.socket_client.on(`${userData.user.id}/notifications`, () => {
        dispatch({ type: SHOW_NOTIFICATION_BADGE, payload: true });
      });

      window.socket_client.on(`${userData.user.role}/notifications`, () => {
        dispatch({ type: SHOW_NOTIFICATION_BADGE, payload: true });
      });
    }
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        moment(new Date()).format("MMMM Do YYYY, hh:mm:ss a") >=
        moment(userData.tokens.accessTokenExpiresAt)
          .subtract(1, "minutes")
          .format("MMMM Do YYYY, hh:mm:ss a")
      )
        dispatch(refreshToken({ refreshToken: userData.tokens.refreshToken }));
    }, 30000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const logoutFunction = () => {
    dispatch(logout(refreshTokenLogout));
  };

  //when location changes, set the user
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const openLink = (link) => {
    history.push(`/${link}`);
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const goVerification = () => {
    if (localStorage.getItem("url") === "/payment-verification") {
      localStorage.removeItem("url");
      history.go(-3);
    } else {
      history.goBack();
    }
  };

  return (
    <Grid
      className={styles.header}
      container
      justifyContent="space-between"
      style={{ paddingLeft: "8%" }}
    >
      <Grid>
        <Button style={{ color: "#1976d2" }} onClick={() => goVerification()}>
          Back
        </Button>
      </Grid>
      <Grid style={{ marginRight: "5px" }}>
        <Button>
          {showBadge ? (
            <Badge
              color="secondary"
              overlap="rectangular"
              badgeContent=" "
              variant="dot"
            >
              <NotificationsActiveIcon
                color={"primary"}
                onClick={() => {
                  history.push(`/Notifications`);
                  dispatch({ type: SHOW_NOTIFICATION_BADGE, payload: false });
                }}
              />
            </Badge>
          ) : (
            <NotificationsActiveIcon
              color={"primary"}
              onClick={() => {
                history.push(`/Notifications`);
                dispatch({ type: SHOW_NOTIFICATION_BADGE, payload: false });
              }}
            />
          )}
        </Button>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar style={{ backgroundColor: "#1976D2" }}>
            {userData?.result?.name?.charAt(0)}
          </Avatar>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={styles.popper}
          placement="bottom-end"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper elevation={3}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => openLink("settings")}>
                      {userData?.user?.email}
                    </MenuItem>
                    <MenuItem onClick={() => history.push(`/reset`)}>
                      Change Password
                    </MenuItem>
                    <MenuItem onClick={() => logoutFunction()}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default Header;
