import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" fullWidth />
      <TextInput multiline source="body" fullWidth />
    </SimpleForm>
  </Edit>
);
