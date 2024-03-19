import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const LabTabs = ({ tabs }) => {
  const [value, setValue] = React.useState(tabs[0].value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    const selectedTab = tabs.find((tab) => tab.value === value);
    if (selectedTab) {
      return selectedTab.content;
    }
    return null;
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{ textTransform: "none" }}
              />
            ))}
          </TabList>
        </Box>
        {renderTabContent()}
      </TabContext>
    </Box>
  );
};

export default LabTabs;
