import React from "react";
import {ITabs} from "../../../interface/ITabs";

export const Tabs = ({
     tabs,
     children,
     activeTab
}: {
    tabs: ITabs[],
    children:any,
    activeTab: string
}) => {
    return (
        <>
            {children}
        </>
    );
};