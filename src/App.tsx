import React, {useState} from "react";
import "./App.css";
import {Tabs, TabsBody, TabsHeader, TabsIfActive} from "./Components/Tab";

const Tab1 = () => {
  return <>Tab - 1 Content</>;
};
const Tab2 = () => {
  return <>Tab - 2 Content</>;
};
const Tab3 = () => {
    return <>Tab - 3 Content</>;
};

export default function App() {
  const tabs = [
    {
      label: "Tab 1",
      key: "tab-1",
      component: <Tab1 />,
    },
    {
      label: "Tab 2",
      key: "tab-2",
      component: <Tab2 />,
    },
      {
          label: "Tab 3",
          key: "tab-3",
          component: <Tab3 />,
      }
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const onTabClick = (tabKey:string) => {
    setActiveTab(tabKey);
  };

  return (
      <div className="wrapper">
        <Tabs
            tabs={tabs}
            activeTab={activeTab}
        >
            <TabsHeader
                tabs={tabs}
                activeTabKey={activeTab}
                onTabClick={onTabClick}
            />
          <div className="tabs-content-body">
            <TabsBody>
              {tabs.map(({ key, label, component }) => (
                <TabsIfActive
                    key={key}
                    tabKey={key}
                    isActive={activeTab === key}
                >
                  {component}
                </TabsIfActive>
            ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
  );
}
