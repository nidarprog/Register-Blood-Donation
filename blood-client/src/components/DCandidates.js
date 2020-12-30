import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import {
  Grid,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";

import DCandidateForm from "./DCandidateForm";

const DCandidates = (props) => {
  useEffect(() => {
    props.fetchAllDCandidate();
  }, []);

  return (
    <Paper elevation={10} style={{ marginTop: 20, height: 410 }}>
      <Typography
        align='center'
        style={{
          fontFamily: "italic",
          backgroundColor: "#FF5757",
          color: "white",
          fontSize: 24,
        }}
      >
        Blood donation register
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Groups</TableCell>
                  <TableCell>Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.dCandidateList.map((record, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.mobile}</TableCell>
                      <TableCell align='center'> {record.bloodGroup}</TableCell>
                      <TableCell align='center'> {record.age}</TableCell>
                      <TableCell>
                        <ButtonGroup>
                          <Button>Edit</Button>
                          <Button>Delete</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fetchAllDCandidate: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(DCandidates);
