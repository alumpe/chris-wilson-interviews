import React from "react";
import { Paper, Tabs as MuiTabs, Tab } from "@material-ui/core";
import { useStore } from "../../store/useStore";
import { TabPanel } from "./TabPanel";
import { QAndA } from "./QAndA";
import BaeclastData from "../../interviews/baeclast.json";

export const Tabs = () => {
  const { activeTab, setActiveTab } = useStore();

  return (
    <>
      <Paper>
        <MuiTabs
          value={activeTab}
          onChange={(event: React.ChangeEvent<{}>, newValue: number) =>
            setActiveTab(newValue)
          }
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Baeclast" />
          <Tab label="Ziz & Mathil" />
          <Tab label="Ghazzy, Grimro, Tuna, DatModz" />
        </MuiTabs>
      </Paper>

      <TabPanel value={activeTab} index={0}>
        <QAndA data={BaeclastData} />
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        Coming soon
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        Coming soon
      </TabPanel>
    </>
  );
};
