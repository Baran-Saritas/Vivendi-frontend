import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <p className="nf-code">404</p>
      <p className="nf-message">Page Not Found</p>
      <Button
        className="nf-button"
        onClick={() => navigate("/")}
        variant="outlined"
        size="small"
      >
        Back Home
      </Button>
    </div>
  );
}
