import type { SubmitEvent } from "react";

export const handleGoogleAlert = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Wire this to POST /api/auth/login");
};
