import {
  Datagrid,
  EmailField,
  List,
  TextField,
  UrlField,
  SimpleList,
  ReferenceField,
} from "react-admin";
import { useMediaQuery } from "@mui/material";

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
