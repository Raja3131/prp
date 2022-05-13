import React from "react";
import { Typography, Button } from "@material-ui/core";

const PaymentFailed = () => {
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
      <>
        <Typography
          style={{
            margin: 10,
          }}
          variant="h2"
          component="h2"
        >
          payment failed, try again...
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
    </div>
  );
};

export default PaymentFailed;
