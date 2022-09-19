import { Button } from "@mui/material";
import React from "react";
import { useSnack } from "./lib";

export default function App() {
    const { snackBar, showMessage } = useSnack();

    const showSnackBar = function () {
        showMessage({
            success: "Hello World!",
        });
    };

    return (
        <>
            <Button variant="contained" onClick={showSnackBar}>
                Show Snack
            </Button>
            {snackBar}
        </>
    );
}
