import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import { PostList } from "./components/posts";
import jsonServerProvider from "ra-data-json-server";
import { PostEdit } from "./components/posts/edit";
import { PostCreate } from "./components/posts/create";
import { defaultTheme } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./components/dashboard";
import authProvider from "./components/login/authProvider";

const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark", // Switching the dark mode on is a single property value change.
  },
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={theme}
  >
    <Resource
      name="Users"
      recordRepresentation="name"
      list={UserList}
      icon={UserIcon}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);

export default App;
