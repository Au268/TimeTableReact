import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginMiddle from "../api/loginMiddleApi";

export default function IsAuthenticated({ children, name }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await loginMiddle();

                if (!result.authentication) {
                    if (name === "admin") {
                        navigate("/login/admin", { replace: true });
                    } else if (name === "cr") {
                        navigate("/login/cr", { replace: true });
                    }
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                navigate("/login/admin", { replace: true });
            }
        };

        checkAuth();
    }, [navigate, name]);

    if (loading) {
        return <div>Checking authentication...</div>;
    }

    return children;
}
