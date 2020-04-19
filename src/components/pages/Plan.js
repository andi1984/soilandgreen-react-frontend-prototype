import React, { useEffect, useState } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
// TIMELINE IMPORTS - Start
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
// TIMELINE IMPORTS - End
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import Wrapper from '../Layout/Wrapper';
import TopBar from "../Layout/TopBar.js";
import { readCrops } from "../../helper/localStorage";
import { getSelected } from "../../helper/array";
import { generate as generatePlan } from "../../helper/plan";
import "../../timeline.css";

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const useStyles = makeStyles({
  smallAvatar: {
    width: 20,
    height: 20,
    marginRight: 5
  }
});
const PlanPage = ({ history }) => {
  const classes = useStyles();
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const selectedCrops = getSelected(readCrops());
    const { groups, items } = generatePlan(selectedCrops);
    setGroups(groups);
    setItems(items);
  }, []);

  return (
    <Wrapper>
      <TopBar title="Dein Gartenplan" />
      <h1>Gartenplan</h1>
      <Timeline
        canMove={false}
        dragging={false}
        groups={groups}
        items={items}
        visibleTimeStart={moment().startOf("year").unix()*1000}
        visibleTimeEnd={moment().endOf("year").unix()*1000}
        groupRenderer={({ group }) => {
          return (
            <GroupWrapper>
              <Avatar
                className={classes.smallAvatar}
                alt={group.title}
                src={group.image}
              />
              <span className="title">{group.title}</span>
            </GroupWrapper>
          );
        }}
      />
    </Wrapper>
  );
};

export default withRouter(PlanPage);
