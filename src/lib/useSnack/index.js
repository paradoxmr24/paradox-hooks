import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useReducer } from "react";

const snackReducer = function (state, action) {
    if (!action) return { success: "Closed", show: false };
    const severity = Object.keys(action)[0];
    const message = Object.values(action)[0];
    return { show: true, severity, message };
};

export default function useSnack() {
    const [snack, showMessage] = useReducer(snackReducer, snackReducer(null));
    return {
        snackBar: (
            <Snackbar open={snack.show} autoHideDuration={3000} onClose={() => showMessage(null)}>
                <Alert color={snack.severity} severity={snack.severity}>
                    {snack.message}
                </Alert>
            </Snackbar>
        ),
        showMessage,
    };
}
