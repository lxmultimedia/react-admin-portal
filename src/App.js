// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Users" list={UserList} />
  </Admin>
);

export default App;
