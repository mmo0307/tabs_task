import React from "react";
import './tabsHeader.css';
import {ITabs} from "../../../interface/ITabs";

export const TabsHeader = ({ tabs, activeTabKey, onTabClick }: {tabs: ITabs[], activeTabKey: string, onTabClick: (key:string) => void}) => {
    return (
        <div className="tabs-header">
            {tabs.map(({ key, label }) => (
                <div
                    className={activeTabKey === key ? "tabs-label-active" : "tabs-label"}
                    key={key}
                    onClick={() => onTabClick(key)}
                    style={{ fontWeight: activeTabKey === key ? "bold" : "normal" }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};
