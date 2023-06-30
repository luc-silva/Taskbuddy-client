import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const RedirectUser = ({ user }: { user: IUserSession }) => {
    const navigate = useNavigate();
    let path = useLocation();
    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user]);
    return null;
};
