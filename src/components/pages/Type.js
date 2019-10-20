import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import TopBar from "../Layout/TopBar.js";
import List from "../List";

import { gardenTypes } from "../../helper/api";
import { saveType } from "../../helper/localStorage";
import routes from "../../routes";

const TypeSelectionPage = ({ history }) => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    gardenTypes().then(types => {
      setTypes(types);
    });
  }, []);

  const onListSelect = item => {
    // Save localstorage
    saveType(JSON.stringify(item));

    // Redirect to plants
    history.push(routes.crops);
  };

  return (
    <div>
      <TopBar title="Gartenart" />
      <h1>Wo möchtest du etwas anpflanzen?</h1>
      <List
        items={types.map(type =>
          Object.assign({}, type, { text: { primary: type.label } })
        )}
        onSelect={e => {
          onListSelect(e);
        }}
      />
    </div>
  );
};

export default withRouter(TypeSelectionPage);
