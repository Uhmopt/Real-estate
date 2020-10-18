import React, { useState } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CloseIcon from '@material-ui/icons/Close';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
// Demo Data
const data1 = ["Paver", "Edge stone", "Light"];
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
  padding: 8,
  margin: `0 0 ${grid}px 0`,
  border: "1px solid #eee",
  position: "relative",

  // change background colour if dragging
  background: isDragging ? "#eee" : "#fff",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  width: "100%"
});

function QuoteApp() {
  const [state, setState] = useState([getItems(3)]);

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
  return (
    <div>
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
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
                            <GridContainer>
                              <GridItem xs={1} sm={1} md={1} lg={1} className="hidden-sm">
                              <OpenWithIcon style={{marginTop: 6, color: "#9e9e9e"}} />
                              </GridItem>
                              <GridItem xs={4} sm={4} md={2} lg={2}>
                                <h6>
                                {data1[index]}
                                </h6>
                              </GridItem>
                              <GridItem xs={4} sm={4} md={2} lg={2}>
                                <h6>
                                  Attribute 1
                                </h6>
                              </GridItem>
                              <GridItem xs={4} sm={4} md={2} lg={2}>
                                <h6>
                                  Attribute 2
                                </h6>
                              </GridItem>
                              <GridItem xs={4} sm={4} md={2} lg={2}>
                                <h6>
                                  Attribute 3
                                </h6>
                              </GridItem>
                              <GridItem xs={4} sm={4} md={2} lg={2}>
                                <h6>
                                  Attribute 4
                                </h6>
                              </GridItem>
                              <GridItem xs={1} sm={1} md={1} lg={1}>
                                <CloseIcon className="drag-remove" 
                                  onClick={() => {
                                    const newState = [...state];
                                    newState[ind].splice(index, 1);
                                    setState(
                                      newState.filter(group => group.length)
                                    );
                                  }}/>
                              </GridItem>
                            </GridContainer>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default QuoteApp;