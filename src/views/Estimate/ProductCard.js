import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/icons
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// core components

import { Collapse } from 'react-collapse';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

import { setEstimateGroup } from "../../Store/action/estimateAction";

const useStyles1 = makeStyles(basicsStyle);
const useStyles = makeStyles(styles);
// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = list
    const [removed] = result.products.splice(startIndex, 1);
    result.products.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = source;
    const destClone = destination;
    const [removed] = sourceClone.products.splice(droppableSource.index, 1);

    destClone.products.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 12;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    border: "1px solid #ccc",
    borderRadius: 6,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "#fff",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    marginBottom: 20,
    borderRadius: 12,
    width: "100%"
});

export default function DragAndDrop() {
    const dispatch = useDispatch();
    const groupsData = useSelector(state => state.group.groupData);

    const [isOpened1, setIsOpened1] = useState(true);

    const classes = useStyles();
    const classes1 = useStyles1();

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(groupsData[sInd], source.index, destination.index);
            const newState = [...groupsData];
            newState[sInd] = items;
            dispatch(setEstimateGroup(newState));
        } else {
            const result = move(groupsData[sInd], groupsData[dInd], source, destination);

            const newState = [...groupsData];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];
            dispatch(setEstimateGroup(newState));
        }
    }

    const toggleOptional = (key) => {
        const data = groupsData;
        data[key].optional = !data[key].optional;
        dispatch({ type: "SET_ESTIMATE_GROUP", payload: data })
    };

    const handleGroupName = (key, value) => {
        const data = groupsData;
        data[key].name = value;
        dispatch({ type: "UPDATE_GROUP_DATA", payload: data })
    };

    const deleteGroup = (key) => {
        const data = groupsData;
        data.splice(key, 1);
        dispatch({ type: "UPDATE_GROUP_DATA", payload: data })
    }

    return (
        <div className="cd-section">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div className={classes.container}>
                    <div className="main-content">
                        <Grid container spacing={3}>
                            <Grid md={12} item>
                                <div>
                                    <div style={{ display: "flex" }}>
                                        <DragDropContext onDragEnd={onDragEnd}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} lg={12} md={12} style={{ marginBottom: 20 }}>
                                                    {groupsData.map((el, ind) => (
                                                        <Droppable key={ind} droppableId={`${ind}`}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                                    {...provided.droppableProps}
                                                                >
                                                                    <Grid container spacing={3}>
                                                                        <Grid item xs={12} md={10} lg={10}>
                                                                            <div className="estimate-card">
                                                                                <Grid container>
                                                                                    <Grid item xs={5} sm={5} md={6} lg={6}>
                                                                                        <TextField
                                                                                            required
                                                                                            label="Group name"
                                                                                            defaultValue={el.name}
                                                                                            onChange={e => handleGroupName(ind, e.target.value)}
                                                                                            className="card-title"
                                                                                        />
                                                                                    </Grid>
                                                                                    <Grid item xs={3} sm={3} md={4} lg={4}>
                                                                                        <FormControlLabel
                                                                                            control={
                                                                                                <Checkbox
                                                                                                    color="primary"
                                                                                                    checked={el.optional}
                                                                                                    onClick={e => toggleOptional(ind)}
                                                                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                                />
                                                                                            }
                                                                                            classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                                                            style={{ marginTop: 20 }}
                                                                                            label="Optional"
                                                                                        />
                                                                                    </Grid>
                                                                                    <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                        <div className="product-action">
                                                                                            <Button variant="outlined" size="small" onClick={e => setIsOpened1(!isOpened1)}>
                                                                                                {isOpened1 ? (
                                                                                                    <RemoveIcon style={{ fontSize: "1rem" }} />
                                                                                                ) : (
                                                                                                        <AddIcon style={{ fontSize: "1rem" }} />
                                                                                                    )}
                                                                                            </Button>
                                                                                            <Button variant="outlined" size="small" onClick={e => deleteGroup(ind)}>
                                                                                                <DeleteIcon style={{ fontSize: "1rem" }} />
                                                                                            </Button>
                                                                                        </div>
                                                                                    </Grid>
                                                                                </Grid>

                                                                                <Collapse isOpened={isOpened1}>
                                                                                    {el.products.map((item, index) => (
                                                                                        <Draggable key={item.id} draggableId={item.id} index={index} >
                                                                                            {(provided, snapshot) => (
                                                                                                <div
                                                                                                    ref={provided.innerRef}
                                                                                                    {...provided.draggableProps}
                                                                                                    {...provided.dragHandleProps}
                                                                                                    style={getItemStyle(
                                                                                                        snapshot.isDragging,
                                                                                                        provided.draggableProps.style
                                                                                                    )}
                                                                                                >
                                                                                                    <Grid container spacing={2}>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={1}>
                                                                                                            <OpenWithIcon />
                                                                                                        </Grid>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                                            <h6>{item.title}</h6>
                                                                                                        </Grid>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                                            <h6>{item.manufacturer}</h6>
                                                                                                        </Grid>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                                            <h6>{item.product}</h6>
                                                                                                        </Grid>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                                            <h6>$ {item.cost}</h6>
                                                                                                        </Grid>
                                                                                                        <Grid item xs={4} sm={4} md={2} lg={2}>
                                                                                                            <h6>{item.color}</h6>
                                                                                                        </Grid>
                                                                                                        <Grid item xs={1} style={{ position: "relative" }}>
                                                                                                            <div className="item-remove-corner">
                                                                                                                <Button aria-label="delete" style={{ minWidth: 25 }} className={classes.margin} size="small"
                                                                                                                    onClick={() => {
                                                                                                                        const newState = [...groupsData];
                                                                                                                        newState[ind].products.splice(index, 1);
                                                                                                                        dispatch(setEstimateGroup(newState))
                                                                                                                    }}>
                                                                                                                    <ClearIcon fontSize="inherit" />
                                                                                                                </Button>
                                                                                                            </div>
                                                                                                        </Grid>
                                                                                                    </Grid>
                                                                                                </div>
                                                                                            )}
                                                                                        </Draggable>
                                                                                    ))}
                                                                                </Collapse>
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid item xs={12} md={2} lg={2}>
                                                                            <h3 className="product-price">$ {el.products.reduce((pv, cv) => {
                                                                                return pv + cv.cost 
                                                                            }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                                                                        </Grid>
                                                                    </Grid>
                                                                    {provided.placeholder}
                                                                </div>
                                                            )}
                                                        </Droppable>
                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </DragDropContext>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
}

const rootElement = document.getElementById("root");
