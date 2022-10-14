import * as React from "react";
import { useMediaQuery } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  SimpleList,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <AutocompleteInput optionText="name" fullWidth />
  </ReferenceInput>,
];

export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={postFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => (
            <ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
          )}
        />
      ) : (
        <Datagrid>
          <ReferenceField source="userId" reference="users" link>
            <TextField source="name" />
          </ReferenceField>
          <TextField source="id" />
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
