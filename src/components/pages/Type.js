import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Wrapper from '../Layout/Wrapper';
import TopBar from "../Layout/TopBar";
import Spinner from "../Spinner";
import List from "../List";

import { gardenTypes } from "../../helper/api";
import { saveType } from "../../helper/localStorage";
import { getIconForType } from "../../helper/type";
import { getGermanTranslations } from "../../helper/l10n";
import routes from "../../routes";

const TypeSelectionPage = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    gardenTypes().then(types => {
      setIsLoading(false);
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
    <Wrapper>
      <TopBar title="Gartenart" />
      <h1>Wo möchtest du etwas anpflanzen?</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <List
          items={types.map(type =>
            Object.assign({}, type, {
              text: { primary: getGermanTranslations[type.id] },
              image: getIconForType(type)
            })
          )}
          onSelect={e => {
            onListSelect(e);
          }}
        />
      )}
    </Wrapper>
  );
};

export default withRouter(TypeSelectionPage);
