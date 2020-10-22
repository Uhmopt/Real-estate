import React, { useState } from "react";
// @material-ui/icons
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import Check from "@material-ui/icons/Check";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
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


const useStyles1 = makeStyles(basicsStyle);
const useStyles = makeStyles(styles);
// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = isDraggingOver => ({
    border: "1px solid #ccc",
    padding: grid,
    width: "100%"
});

export default function QuoteApp() {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);

    const [checked, setChecked] = React.useState([24, 22]);
    
    const [isOpened, setIsOpened] = useState(true);
    const [isOpened1, setIsOpened1] = useState(true);
    const [isOpened2, setIsOpened2] = useState(true);

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
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }

    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (
        <div className="cd-section">
            <div className={classes.sectionWhite}>
                {/* BLOG PLAIN CARDS START */}
                <div>
                    <div className={classes.container}>
                        <div className="main-content">
                            <Grid container spacing={3}>
                                <Grid md={12} item>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setState([...state, []]);
                                            }}
                                        >
                                            Add new group
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setState([...state, getItems(1)]);
                                            }}
                                        >
                                            Add new item
                                        </button>
                                        <div style={{ display: "flex" }}>
                                            <DragDropContext onDragEnd={onDragEnd}>
                                                {state.map((el, ind) => (
                                                    <Droppable key={ind} droppableId={`${ind}`}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                style={getListStyle(snapshot.isDraggingOver)}
                                                                {...provided.droppableProps}
                                                            >
                                                                <Grid container spacing={3}>
                                                                    <Grid item xs={12}>
                                                                        <Grid container>
                                                                            <Grid item xs={5}>
                                                                                <TextField
                                                                                    required
                                                                                    label="Group name"
                                                                                    defaultValue="DEFALUT GROUP"
                                                                                    className="card-title"
                                                                                />
                                                                            </Grid>
                                                                            <Grid xs={3} sm={3} md={4} lg={4}>
                                                                                <FormControlLabel
                                                                                    control={
                                                                                        <Checkbox
                                                                                            tabIndex={-1}
                                                                                            onClick={() => handleToggle(21)}
                                                                                            checkedIcon={<Check className={classes1.checkedIcon} />}
                                                                                            icon={<Check className={classes1.uncheckedIcon} />}
                                                                                            classes={{
                                                                                                checked: classes1.checked,
                                                                                                root: classes1.checkRoot
                                                                                            }}
                                                                                        />
                                                                                    }
                                                                                    classes={{ label: classes1.label, root: classes1.labelRoot }}
                                                                                    style={{ marginTop: 20 }}
                                                                                    label="Optional"
                                                                                />
                                                                            </Grid>
                                                                            <Grid xs={4} sm={4} md={2} lg={2}>
                                                                                <div className="product-action">
                                                                                    <Button variant="outlined" size="small" onClick={e => setIsOpened1(!isOpened1)}>
                                                                                        {isOpened1 ? (
                                                                                            <RemoveIcon style={{ fontSize: "1rem" }} />
                                                                                        ) : (
                                                                                                <AddIcon style={{ fontSize: "1rem" }} />
                                                                                            )}
                                                                                    </Button>
                                                                                    <Button variant="outlined" size="small">
                                                                                        <DeleteIcon style={{ fontSize: "1rem" }} />
                                                                                    </Button>
                                                                                </div>
                                                                            </Grid>
                                                                        </Grid>

                                                                        {el.map((item, index) => (
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
                                                                                            <Grid item xs={1}>

                                                                                            </Grid>
                                                                                            <Grid item xs={9}>

                                                                                            </Grid>
                                                                                            <Grid item xs={2}>
                                                                                                <Button aria-label="delete" style={{ minWidth: 25 }} className={classes.margin} size="small"
                                                                                                    onClick={() => {
                                                                                                        const newState = [...state];
                                                                                                        newState[ind].splice(index, 1);
                                                                                                        setState(
                                                                                                            newState.filter(group => group.length)
                                                                                                        );
                                                                                                    }}>
                                                                                                    <ClearIcon fontSize="inherit" />
                                                                                                </Button>
                                                                                            </Grid>
                                                                                        </Grid>
                                                                                    </div>
                                                                                )}
                                                                            </Draggable>
                                                                        ))}
                                                                    </Grid>
                                                                </Grid>
                                                                {provided.placeholder}
                                                            </div>
                                                        )}
                                                    </Droppable>
                                                ))}
                                            </DragDropContext>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

const rootElement = document.getElementById("root");
