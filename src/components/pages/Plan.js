import React, { useEffect, useState } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import TopBar from "../Layout/TopBar.js";
import List from "../List";

import { gardenTypes } from "../../helper/api";
import { readCrops, readType } from "../../helper/localStorage";
import { getSelected } from "../../helper/array";
import routes from "../../routes";

const PlanPage = ({ history }) => {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const selectedCrops = getSelected(readCrops());
    selectedCrops.forEach(crop => {
      if ("periods" in crop) {
        const selectedGardenType = readType();
        console.log("selected type", selectedGardenType);

        const periodsForSelectedGardenType = crop.periods.filter(
          period => period.location === selectedGardenType.id
        );

        const groupsForCropPeriod = periodsForSelectedGardenType.map(
          period => ({
            id: period.id,
            title: `${crop.name} - ${period.workflow}`
          })
        );

        const itemsForCropPeriod = periodsForSelectedGardenType.map(period => {
          return {
            group: period.id,
            title: period.workflow,
            id: Math.random(),
            start_time: moment(period.begin),
            end_time: moment(period.end)
          };
        });

        setGroups(groups.concat(groupsForCropPeriod));
        setItems(items.concat(itemsForCropPeriod));
      }
    });
  }, []);

  useEffect(() => {
    console.log("groups", groups);
  }, [groups]);

  useEffect(() => {
    console.log("items", items);
  }, [items]);
  return (
    <div>
      <TopBar title="Your garden plan" />
      <h1>Plan</h1>
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
