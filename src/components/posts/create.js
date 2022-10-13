import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" fullWidth />
      <TextInput multiline source="body" fullWidth />
    </SimpleForm>
  </Create>
);
