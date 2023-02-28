import React from "react";

export const TabsIfActive = ({ children, tabKey, isActive }:{
    children: any,
    isActive: boolean,
    tabKey: string
}) => {
    return isActive ? <>{children}</> : null;
};