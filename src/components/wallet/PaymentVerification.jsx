import React, { useState, useEffect } from "react";
import { CircularProgress, Typography, Button } from "@material-ui/core";
import { userData } from "../../utils/config";

const PaymentVerification = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.socket_client.on(`${userData.user.role}/walletData`, (data) => {
      setLoader(false);
    });
    localStorage.setItem("url", window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loader ? (
        <>
          <Typography
            style={{
              margin: 10,
            }}
            variant="h2"
            component="h2"
          >
            Verifying Payment...
          </Typography>
          <CircularProgress />
        </>
      ) : (
        <>
          <Typography
            style={{
              margin: 10,
            }}
            variant="h2"
            component="h2"
          >
            Balance added Successfully...
          </Typography>
          <Button
            // component={Link}
            onClick={() => (window.location.href = "/dashboard")}
            variant="contained"
            size="large"
            color="primary"
          >
            Back to Dashboard
          </Button>
        </>
      )}
    </div>
  );
};

export default PaymentVerification;
