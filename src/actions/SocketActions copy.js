import { Manager, io } from "socket.io-client";
import store from "../index";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import store from "store";
import { SHOW_NOTIFICATION } from "../actions/constants";
// import Client from "../utils/axiosInstance";
// import { myLog } from "../utils/Utility";
let socketWeb;
let baseURL = "http://52.55.21.51:8082";
export const startWebSocketConnect = () => async (dispatch) => {
  let manager = new Manager(baseURL, {
    reconnectionDelayMax: 10000,
    // path: "",
    autoConnect: true,
    // forceNew: false,
    // verify: false,
    // reconnection: true,
    // reconnectionDelay: 3600,
    timeout: 1000,
    transports: ["websocket"],

    // query: {
    //   userId: userId,
    // },
  });
  socketWeb = manager.socket(baseURL);
  console.log(socketWeb);

  socketWeb.on("error", (data) => {
    console.log("SOCKET ERROR ::", data);
  });

  socketWeb.on("connect_error", () => {
    setTimeout(() => {
      socketWeb.connect();
    }, 1000);
  });

  socketWeb.on("vendor/notifications", (data) => {
    console.log("--------------_>>>>>>   HIIIIII", data);
  });
  /**
   * Connected
   */
  socketWeb.on("connect", (val) => {
    console.log("--------------_>>>>>>   Connected  web", val);
    // socketWeb.emit("my message", "hello from front end");
  });
  socketWeb.on("hi", (val) => {
    console.log("--------------_>>>>>>  New Msg", val);
  });
  socketWeb.on("notifications", (data) => {
    console.log("--------------_>>>>>>  New Notification", data);
    dispatch({
      type: SHOW_NOTIFICATION,
      payload: data,
    });
  });

  /**
   * _onDisConnect
   */
  socketWeb.on("disconnect", (data) => {
    console.log("--------------_>>>>>>   _onDisConnect  web", data);
  });
  socketWeb.on("initiate", (data) => {
    console.log("data ::::::::::::::::::::", data);
  });
  // )
  // };
  // },[]);
};
export const checkWebConnect = () => async (dispatch) => {
  console.log("MMMMMMMMMMM");
  dispatch(startWebSocketConnect());
};
