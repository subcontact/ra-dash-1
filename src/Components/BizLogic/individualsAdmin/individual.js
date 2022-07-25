import React from "react";
import { render } from "react-dom";

import { Admin, Resource, Delete } from "react-admin";
import jsonRestDataProvider from "ra-data-fakerest";

import addUploadFeature from "../Common/addUploadFeature";

import data from "./data";
import authProvider from "../Common/authProvider";
import i18nProvider from "../Common/i18n/provider";

import {
  IndividualList,
  IndividualEdit,
  IndividualCreate,
  IndividualShow,
  IndividualIcon
} from "./individuals";

export const dataProvider = jsonRestDataProvider(data, true);
export const uploadCapableDataProvider = addUploadFeature(dataProvider);
export const delayedDataProvider = (type, resource, params) =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(uploadCapableDataProvider(type, resource, params)),
      1000
    )
  );

render(
  <Admin
    title="CRM"
    dataProvider={delayedDataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    {auth => [
      <Resource
        key="individuals"
        name="individuals"
        list={IndividualList}
        create={IndividualCreate}
        edit={IndividualEdit}
        show={IndividualShow}
        remove={Delete}
        icon={IndividualIcon}
      />
    ]}
  </Admin>,
  document.getElementById("root")
);
