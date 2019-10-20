import React, { useEffect, useState } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";

// TIMELINE IMPORTS - Start
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
// TIMELINE IMPORTS - End

import TopBar from "../Layout/TopBar.js";
import { readCrops } from "../../helper/localStorage";
import { getSelected } from "../../helper/array";
import { generate as generatePlan } from "../../helper/plan";

import "../../timeline.css";

const PlanPage = ({ history }) => {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const selectedCrops = getSelected(readCrops());
    const { groups, items } = generatePlan(selectedCrops);
    setGroups(groups);
    setItems(items);
  }, []);

  return (
    <div>
      <TopBar title="Dein Gartenplan" />
      <h1>Gartenplan</h1>
      <Timeline
        canMove={false}
        dragging={false}
        groups={groups}
        items={items}
        visibleTimeStart={moment().startOf("year")}
        visibleTimeEnd={moment().endOf("year")}
      />
    </div>
  );
};

export default withRouter(PlanPage);
