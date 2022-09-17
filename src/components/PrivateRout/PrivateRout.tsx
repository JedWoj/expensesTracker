import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

interface PrivateRoutType {
    children: JSX.Element;
}

const PrivateRout = ({children}: PrivateRoutType) => {
    const isLoggedIn = useAppSelector((state) => state.user);
    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRout;