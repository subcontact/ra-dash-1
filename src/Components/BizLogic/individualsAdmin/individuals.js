import React from "react";
import {
  BulkActions,
  BulkDeleteMenuItem,
  BooleanField,
  BooleanInput,
  CheckboxGroupInput,
  ChipField,
  Create,
  CreateButton,
  Datagrid,
  DateField,
  DateInput,
  DisabledInput,
  Edit,
  EditButton,
  Filter,
  FormTab,
  ImageField,
  ImageInput,
  List,
  LongTextInput,
  NumberField,
  NumberInput,
  ReferenceArrayField,
  ReferenceArrayInput,
  ReferenceManyField,
  Responsive,
  RichTextField,
  SaveButton,
  SelectField,
  SelectArrayInput,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleList,
  SingleFieldList,
  Tab,
  TabbedForm,
  TabbedShowLayout,
  TextField,
  TextInput,
  Toolbar,
  minValue,
  number,
  required,
  translate,
  AutocompleteInput,
  ReferenceField,
  ReferenceInput,
  minLength,
  SimpleShowLayout
} from "react-admin"; // eslint-disable-line import/no-unresolved

import PersonIcon from "material-ui-icons/Contacts";
import Avatar from "material-ui/Avatar";
import Card, { CardActions, CardHeader, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";

import Chip from "material-ui/Chip";
import ChevronLeft from "material-ui-icons/ChevronLeft";
import ChevronRight from "material-ui-icons/ChevronRight";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
export const IndividualIcon = PersonIcon;

const QuickFilter = translate(({ label, translate }) => (
  <Chip style={{ marginBottom: 8 }} label={translate(label)} />
));

const IndividualFilter = props => (
  <Filter {...props}>
    <TextInput label="fullname" source="q" alwaysOn />
    <TextInput source="fullname" />
    <QuickFilter
      label="resources.individuals.fields.fullname"
      source="fullname"
      defaultValue
    />
  </Filter>
);

const IndividualPagination = translate(
  ({ page, perPage, total, setPage, translate }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
      nbPages > 1 && (
        <Toolbar>
          {page > 1 && (
            <Button
              color="primary"
              key="prev"
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft />
              &nbsp;
              {translate("ra.navigation.prev")}
            </Button>
          )}
          {page !== nbPages && (
            <Button
              color="primary"
              key="next"
              onClick={() => setPage(page + 1)}
            >
              {translate("ra.navigation.next")}&nbsp;
              <ChevronRight />
            </Button>
          )}
        </Toolbar>
      )
    );
  }
);

const listStyles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardContent: theme.typography.body1,
  cardLink: {
    ...theme.typography.body1,
    flexGrow: 1
  },
  cardActions: {
    justifyContent: "flex-end"
  }
});

const IndividualGrid = withStyles(listStyles)(
  translate(({ classes, ids, data, basePath, translate }) => (
    <Grid container style={{ padding: "1em" }}>
      {ids.map(id => (
        <Grid item key={id} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <CardHeader
              title={<TextField record={data[id]} source="fullname" />}
              subheader={
                <div>
                  <TextField record={data[id]} source="type_id" />:
                  <TextField record={data[id]} source="individual_id" />
                </div>
              }
              avatar={
                <Avatar>
                  <PersonIcon />
                </Avatar>
              }
            />
            <CardContent className={classes.cardContent}>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField record={data[id]} source="gender" />
                &nbsp; - &nbsp;
                <TextField record={data[id]} source="marital_status" />
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Born in <DateField record={data[id]} source="birthdate" />
                &nbsp;at &nbsp;
                <TextField record={data[id]} source="country_of_birth" />
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Live at{" "}
                <TextField record={data[id]} source="invoice_district" />
                &nbsp;in&nbsp;
                <TextField record={data[id]} source="invoice_province" />,
                <TextField record={data[id]} source="invoice_country" />.
              </div>
            </CardContent>

            <CardActions className={classes.cardActions}>
              <EditButton
                resource="persons"
                basePath={basePath}
                record={data[id]}
              />
              <ShowButton
                resource="persons"
                basePath={basePath}
                record={data[id]}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ))
);

IndividualGrid.defaultProps = {
  data: {},
  ids: []
};

const IndividualMobileList = props => (
  <SimpleList
    primaryText={record => record.fullname}
    secondaryText={record => record.gender}
    tertiaryText={record => new Date(record.birthdate).toLocaleDateString()}
    leftAvatar={() => <PersonIcon />}
    {...props}
  />
);

export const IndividualList = props => (
  <List
    {...props}
    perPage={6}
    filters={<IndividualFilter />}
    pagination={<IndividualPagination />}
  >
    <Responsive small={<IndividualMobileList />} medium={<IndividualGrid />} />
  </List>
);

export const IndividualCreate = props => (
  <Create {...props}>
    <SimpleForm
      defaultValue={{
        created_at: new Date(),
        ...(props.location.state ? props.location.state.record : {})
      }}
    >
      <DateInput source="birthdate" />
      <TextInput source="fullname" />
    </SimpleForm>
  </Create>
);

// new title for individual JM
const PostTitle = translate(({ record, translate }) => (
  <span>
    {record ? translate("individual.edit.title", { title: record.title }) : ""}
  </span>
));

// New show for individual JM
export const IndividualShow = props => (
  <Show title={<PostTitle />} {...props}>
    <TabbedShowLayout>
      <Tab label="Identity">
        <TextField source="id" />
        <TextField source="person_type" />
        <TextField source="id_type" />
        <TextField source="id_number" />
        <TextField source="id_province" />
        <TextField source="id_district" />
        <TextField source="individual_id" />
      </Tab>

      <Tab label="Demographic Data">
        <TextField source="fullname" />
        <TextField source="name" />
        <TextField source="lastname" />
        <TextField source="gender" />
        <DateField source="birthdate" />
        <TextField source="nationality" />
        <TextField source="country_of_birth" />
        <TextField source="marital_status" />
        <BooleanField source="online_invoice" />
        <BooleanField source="promotion_acceptance" />
      </Tab>
      <Tab label="Invoice Adresses">
        <TextField source="invoice_country" />
        <TextField source="invoice_province" />
        <TextField source="invoice_district" />
        <TextField source="invoice_neighborhood" />
        <TextField source="invoice_address" />
        <TextField source="invoice_additional_info" />
      </Tab>
      <Tab label="Installation Adresses">
        <TextField source="installation_country" />
        <TextField source="installation_province" />
        <TextField source="installation_district" />
        <TextField source="installation_neighborhood" />
        <TextField source="installation_address" />
        <TextField source="installation_additional_info" />
      </Tab>
      <Tab label="Laboral Information">
        <TextField source="labor_place" />
        <TextField source="labor_address" />
        <TextField source="labor_antiquity" />
        <TextField source="labor_incomes" />
      </Tab>
      <Tab label="Additional Information">
        <TextField source="type_of_property" />
        <TextField source="property_antiquity" />
      </Tab>
      <Tab label="Payment Method">
        <TextField source="payment_method" />
      </Tab>
      <Tab label="Personal References of the Customer">
        <TextField source="reference1_name" />
        <TextField source="reference1_address" />
        <TextField source="reference1_Phone" />
        <TextField source="reference1_Relation" />

        <TextField source="reference2_name" />
        <TextField source="reference2_address" />
        <TextField source="reference2_Phone" />
        <TextField source="reference2_Relation" />

        <TextField source="reference3_name" />
        <TextField source="reference3_address" />
        <TextField source="reference3_Phone" />
        <TextField source="reference3_Relation" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export const IndividualEdit = props => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Identity">
        <DisabledInput source="id" />
        <TextInput source="person_type" />
        <TextInput source="id_type" />
        <TextInput source="id_number" />
        <TextInput source="id_province" />
        <TextInput source="id_district" />
        <TextInput source="individual_id" />
      </FormTab>

      <FormTab label="Demographic Data">
        <TextInput source="fullname" />
        <TextInput source="name" />
        <TextInput source="lastname" />
        <SelectInput
          source="gender"
          choices={[
            { name: "Male", id: "Male" },
            { name: "Female", id: "Female" }
          ]}
        />
        <DateInput source="birthdate" />
        <SelectInput
          source="country_of_birth"
          choices={[
            { name: "Argentina", id: "Argentina" },
            { name: "Spain", id: "Spain" },
            { name: "USA", id: "USA" }
          ]}
        />
        <SelectInput
          source="marital_status"
          choices={[
            { name: "Married", id: "Married" },
            { name: "Single", id: "Single" }
          ]}
        />
        <BooleanInput source="online_invoice" />
        <BooleanInput source="promotion_acceptance" />
      </FormTab>

      <FormTab label="Invoice Adresses">
        <SelectInput
          source="invoice_country"
          choices={[
            { name: "Argentina", id: "Argentina" },
            { name: "Spain", id: "Spain" },
            { name: "USA", id: "USA" }
          ]}
        />

        <SelectInput
          source="invoice_province"
          choices={[
            { name: "Florida", id: "Florida" },
            { name: "Connecticut", id: "Connecticut" },
            { name: "Texas", id: "Texas" },
            { name: "Madrid", id: "Madrid" }
          ]}
        />
        <TextInput source="invoice_district" />
        <TextInput source="invoice_neighborhood" />
        <TextInput source="invoice_address" />
        <LongTextInput source="invoice_additional_info" />
      </FormTab>

      <FormTab label="Installation Adresses">
        <SelectInput
          source="installation_country"
          choices={[
            { name: "Argentina", id: "Argentina" },
            { name: "Spain", id: "Spain" },
            { name: "USA", id: "USA" }
          ]}
        />

        <SelectInput
          source="installation_province"
          choices={[
            { name: "Florida", id: "Florida" },
            { name: "Connecticut", id: "Connecticut" },
            { name: "Texas", id: "Texas" },
            { name: "Madrid", id: "Madrid" }
          ]}
        />
        <TextInput source="installation_district" />
        <TextInput source="installation_neighborhood" />
        <TextInput source="installation_address" />
        <LongTextInput source="installation_additional_info" />
      </FormTab>

      <FormTab label="Laboral Information">
        <TextInput source="labor_place" />
        <TextInput source="labor_address" />

        <SelectInput
          source="labor_antiquity"
          choices={[
            { name: "0 to 1 year", id: "0 to 1 year" },
            { name: "1 to 5 year", id: "1 to 5 year" },
            { name: "More than 5 years", id: "More than 5 years" }
          ]}
        />

        <SelectInput
          source="labor_incomes"
          choices={[
            { name: "0 to 1000 euros", id: "0 to 1000 euros" },
            { name: "1000 to 3000 euros", id: "1000 to 3000 euros" },
            { name: "More than 3000 euros", id: "More than 3000 euros" }
          ]}
        />
      </FormTab>
      <FormTab label="Additional Information">
        <TextInput source="type_of_property" />
        <SelectInput
          source="property_antiquity"
          choices={[
            { name: "0 to 1 year", id: "0 to 1 year" },
            { name: "1 to 5 year", id: "1 to 5 year" },
            { name: "More than 5 years", id: "More than 5 years" }
          ]}
        />
      </FormTab>
      <FormTab label="Payment Method">
        <SelectInput
          source="payment_method"
          choices={[
            { name: "Cash", id: "Cash" },
            { name: "Direct Debit", id: "Direct Debit" },
            { name: "Credit Card", id: "Credit Card" }
          ]}
        />
      </FormTab>
      <FormTab label="Personal References of the Customer">
        <TextInput source="reference_1_name" />
        <TextInput source="reference_1_address" />
        <TextInput source="reference_1_Phone" />
        <TextInput source="reference_1_Relation" />

        <TextInput source="reference_2_name" />
        <TextInput source="reference_2_address" />
        <TextInput source="reference_2_Phone" />
        <TextInput source="reference_2_Relation" />

        <TextInput source="reference_3_name" />
        <TextInput source="reference_3_address" />
        <TextInput source="reference_3_Phone" />
        <TextInput source="reference_3_Relation" />
      </FormTab>
    </TabbedForm>
  </Edit>
);
