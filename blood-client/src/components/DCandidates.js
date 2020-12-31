import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import i18n from "../i18n";
import * as actions from "../actions/dCandidate";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const DCandidates = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);
  const { t } = useTranslation();

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  useEffect(() => {
    props.fetchAllDCandidates();
  }, []);

  const { addToast } = useToasts();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteDCandidate(id, () =>
        addToast("Deleted successfully", { appearance: "info" })
      );
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <Button onClick={changeLanguage("no")}>NO</Button>
      <Button onClick={changeLanguage("en")}>EN</Button>
      <Typography
        align='center'
        style={{ color: "white", backgroundColor: "#BD0000", fontSize: 50 }}
      >
        {t("title")}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm {...{ currentId, setCurrentId }} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
        >
          <TableContainer>
            <Grid>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>{t("name")}</TableCell>
                  <TableCell>{t("mobile")}</TableCell>
                  <TableCell>{t("bloodGroup")}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.dCandidateList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.mobile}</TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          fontStyle: "oblique",
                          marginLeft: 250,
                        }}
                      >
                        {record.bloodGroup}
                      </TableCell>
                      <TableCell>
                        <ButtonGroup variant='text'>
                          <Button>
                            <EditIcon
                              color='primary'
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </Button>
                          <Button>
                            <DeleteIcon
                              color='secondary'
                              onClick={() => onDelete(record.id)}
                            />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Grid>
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
  fetchAllDCandidates: actions.fetchAll,
  deleteDCandidate: actions.Delete,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DCandidates));
