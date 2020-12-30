import React, { useRef, useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "./useForm";

const useStyles = (theme) => ({
  textFieldSpacing: {
    marginTop: 5,
    marginBottom: 5,
  },
});

const initalFieldValues = {
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: "",
};

export default function DCandidateForm({ ...props }) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initalFieldValues, props.setCurrentId);

  const validate = () => {
    let temp = [];
    temp.fullName = values.fullName ? "" : "This field is required";
    temp.mobile = values.mobile ? "" : "This field is required";
    temp.bloodGroup = values.bloodGroup ? "" : "This field is required";
    temp.email = /^$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("validation succeeded");
    }
  };

  // useEffect(() => {
  //   if (props.currentId !== 0) {
  //     setValues({
  //       ...props.dCandidateList.find((x) => x.id === props.currentId),
  //     });
  //     setErrors({});
  //   }
  // }, [props.currentId]);

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
      style={{ marginTop: 10 }}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name='fullName'
            variant='filled'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
            {...(errors.fullName && {
              error: true,
              helperText: errors.fullName,
            })}
          />
          <TextField
            name='email'
            variant='filled'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && { error: true, helperText: errors.email })}
          />
          <FormControl
            variant='filled'
            className={classes.formControl}
            {...(errors.bloodGroup && { error: true })}
          >
            <InputLabel ref={inputLabel}>Blood Group</InputLabel>
            <Select
              name='bloodGroup'
              value={values.bloodGroup}
              onChange={handleInputChange}
              labelWidth={labelWidth}
            >
              <MenuItem value=''>Select Blood Group</MenuItem>
              <MenuItem value='A+'>A +ve</MenuItem>
              <MenuItem value='A-'>A -ve</MenuItem>
              <MenuItem value='B+'>B +ve</MenuItem>
              <MenuItem value='B-'>B -ve</MenuItem>
              <MenuItem value='AB+'>AB +ve</MenuItem>
              <MenuItem value='AB-'>AB -ve</MenuItem>
              <MenuItem value='O+'>O +ve</MenuItem>
              <MenuItem value='O-'>O -ve</MenuItem>
            </Select>
            {/* {errors.bloodGroup && (
              <FormHelperText>{errors.bloodGroup}</FormHelperText>
            )} */}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name='mobile'
            variant='filled'
            label='Mobile'
            value={values.mobile}
            onChange={handleInputChange}
            {...(errors.mobile && { error: true, helperText: errors.mobile })}
          />
          <TextField
            name='age'
            variant='filled'
            label='Age'
            value={values.age}
            onChange={handleInputChange}
          />
          <TextField
            name='address'
            variant='filled'
            label='Address'
            value={values.address}
            onChange={handleInputChange}
          />
          <div>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className={classes.smMargin}
            >
              Submit
            </Button>
            <Button
              variant='contained'
              className={classes.smMargin}
              onClick={resetForm}
            >
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
