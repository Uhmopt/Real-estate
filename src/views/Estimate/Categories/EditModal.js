import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Collapse } from "react-collapse";
import { useForm, Controller } from "react-hook-form";

import * as Actions from "../../../Store/action/estimateAction";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PaverModal(props) {
  const dispatch = useDispatch();
  let groupsData = useSelector((state) => state.group.groupData);
  const { register, handleSubmit, errors, control } = useForm();
  // Modal state

  // Mini/Maxium toggle state
  const [isOpened, setIsOpened] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const saveItem = (data) => {
    dispatch(Actions.setUpdataItem(groupsData, data, props.data.id));
    props.toggle();
  };
  return (
    <div>
      <Dialog
        open={props.open ? props.open : false}
        // open={true}
        fullScreen={fullScreen}
        onClose={props.toggle}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>
          {props.data && props.data.title}
          <div className="modal-close">
            <IconButton onClick={props.toggle}>
              <CloseIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={11}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                    error={Boolean(errors.manufacturer)}
                  >
                    <InputLabel>Manufacturer</InputLabel>
                    <Controller
                      as={
                        <Select>
                          <MenuItem value="manufacturer1">
                            Manufacturer 1
                          </MenuItem>
                          <MenuItem value="manufacturer2">
                            Manufacturer 2
                          </MenuItem>
                          <MenuItem value="manufacturer3">
                            Manufacturer 3
                          </MenuItem>
                        </Select>
                      }
                      name="manufacturer"
                      rules={{ required: "this is required" }}
                      control={control}
                      defaultValue={props.data && props.data.manufacturer}
                    />
                    <FormHelperText>
                      {errors.manufacturer && errors.manufacturer.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                    error={Boolean(errors.product)}
                  >
                    <InputLabel>Product</InputLabel>
                    <Controller
                      as={
                        <Select>
                          <MenuItem value="product1">Product 1</MenuItem>
                          <MenuItem value="product2">Product 2</MenuItem>
                          <MenuItem value="product3">Product 3</MenuItem>
                        </Select>
                      }
                      name="product"
                      rules={{ required: "this is required" }}
                      control={control}
                      defaultValue={props.data && props.data.product}
                    />
                    <FormHelperText>
                      {errors.product && errors.product.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                  >
                    <TextField
                      label="SF"
                      variant="outlined"
                      defaultValue={props.data && props.data.sf}
                      name="sf"
                      inputRef={register}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <div className="modal-minimize">
                <IconButton onClick={(e) => setIsOpened(!isOpened)}>
                  {isOpened ? <IndeterminateCheckBoxIcon /> : <AddBoxIcon />}
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={11}>
              <Collapse isOpened={isOpened}>
                <Grid container spacing={1}>
                  <Grid item md={4} xs={11}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        label="LF"
                        variant="outlined"
                        defaultValue={props.data && props.data.lf}
                        name="lf"
                        inputRef={register}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item md={4} xs={11}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        label="Color"
                        variant="outlined"
                        defaultValue={props.data && props.data.color}
                        name="color"
                        inputRef={register}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item md={4} xs={11}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        label="Depth"
                        variant="outlined"
                        defaultValue={props.data && props.data.depth}
                        name="depth"
                        inputRef={register}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item md={12} xs={11}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{ width: "100%", marginTop: 0 }}
                    >
                      <TextField
                        label="Notes"
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue={props.data && props.data.notes}
                        name="notes"
                        inputRef={register}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit(saveItem)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
