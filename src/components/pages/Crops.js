import React, { useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Wrapper from "../Layout/Wrapper";
import TopBar from "../Layout/TopBar.js";
import List from "../List";
import Spinner from "../Spinner";

import { cropJson } from "../../helper/api";
import { saveCrops } from "../../helper/localStorage";
import { setSelected, hasSelected } from "../../helper/array";
import routes from "../../routes";

const CropSelectionPage = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    cropJson()
      .then(res => res.json())
      .then(crops => {
        setCrops(crops);
        setIsLoading(false);
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
    <Wrapper>
      <TopBar title="Saatgut" />
      <h1>Welches Saatgut möchtest du pflanzen?</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
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
            disabled={!hasSelected(crops)}
            onClick={() => {
              history.push(routes.plan);
            }}
          >
            Weiter
          </Button>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default withRouter(CropSelectionPage);
