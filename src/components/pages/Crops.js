import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import TopBar from "../Layout/TopBar.js";
import List from "../List";

import { cropJson } from "../../helper/api";
import { saveCrops } from "../../helper/localStorage";
import { setSelected, getSelected } from "../../helper/array";
import routes from "../../routes";

const CropSelectionPage = ({ history }) => {
  const [crops, setCrops] = useState([
    { name: "test", id: 1 },
    { name: "a", id: 2 },
    { name: "b", id: 3 }
  ]);
  useEffect(() => {
    cropJson()
      .then(res => res.json())
      .then(crops => {
        setCrops(crops);
      });
  }, []);

  useEffect(() => {
    // Save localstorage
    saveCrops(JSON.stringify(crops));
  }, [crops]);

  const onListSelect = (checked, crop) => {
    const updatedCrops = setSelected(crops, crop.id, checked);
    // Save state
    setCrops(updatedCrops);
  };

  return (
    <div>
      <TopBar title="Plants" />
      <h1>Select the plants you're interested in</h1>
      <List
        withCheckbox={true}
        items={crops.map(type =>
          Object.assign(
            {},
            { text: { primary: type.name }, selected: false },
            type
          )
        )}
        onSelect={onListSelect}
      />
      <Button
        color="primary"
        disabled={!getSelected(crops)}
        onClick={() => {
          history.push(routes.plan);
        }}
      >
        Weiter
      </Button>
    </div>
  );
};

export default withRouter(CropSelectionPage);
