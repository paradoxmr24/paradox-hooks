import { Button } from "@mui/material";
import React from "react";
import { useSnack } from "./lib";

export default function App() {
    const { snackBar, showMessage } = useSnack();

    const showSuccess = function () {
        showMessage({
            success: "Success Message!",
        });
    };

    const showError = function () {
        showMessage({
            error: "Error Message!",
        });
    };

    return (
        <>
            <Button variant="contained" onClick={showSuccess} color="success">
                Show Success
            </Button>
            <Button variant="contained" onClick={showError} color="error" sx={{ ml: 1 }}>
                Show Error
            </Button>
            {snackBar}
        </>
    );
}
