import React, { useEffect, useState } from 'react';
import './ActiveSprint.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import Sidebar from '../SideBar/Sidebar'
import "./ActiveSprint.css";
// import 'mdbreact/dist/css/mdb.css';
import IssueService from "../../Services/IssueService";

const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

const item = {
  id: v4(), // v4 is a function that generates a random id
  name: (
    <a href="./childissue" class="card">
      <div class="card-body">
        <h5 class="card-title">Issue summary</h5>
        <p class="card-text">Issue description</p>
        <a href="#" type='button' class="btn btn-primary">Assignee</a>
      </div>
    </a>
  )
}

const item2 = {
  id: v4(),
  name: "Wash the car"
}

function ActiveSprint() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
    "todo": {
      title: "Todo",
      items: []
    },
    "in-progress": {
      title: "In Progress",
      items: []
    },
    "ready-for-QA": {
      title: "Ready for QA",
      items: []
    },
    "QA-in-progress": {
      title: "QA in Progress",
      items: []
    },
    "done": {
      title: "Completed",
      items: []
    }
  })
  const [loading, setloading] = useState(false);
  const [issues, setissues] = useState(null);
  const [sprints, setSprints] = useState(null);
  const [selectedSprint, setSelectedSprint] = useState(sprints ? sprints[0] : null);

  // fetching the data from the backend
  const fetchData = async () => {
    setloading(true);
    try {
      const response = await IssueService.getIssues();

      if (response.data) {
        setissues(response.data);
        console.log(response.data);
        setSprints([...new Set(response.data.map(issue => issue.sprintName))]);
        setSelectedSprint(response.data[0].sprintName);
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchData();

  }, []);

  console.log(selectedSprint)

  useEffect(() => {
    if (issues) {
      const updatedState = { ...state };
      updatedState['todo'].items = [...issues.filter((issue => {
        console.log(issue.sprintName, selectedSprint);
      
        return (
          issue.sprintName === selectedSprint
        )
      })).map(issue => {
        return {
          id: v4(), // v4 is a function that generates a random id
          name: (
            <a href="./childissue" class="card board-card">
              <div class="card-body">
                <h5 class="card-title">{issue.summary}</h5>
                <p class="card-text">{issue.description}</p>
                <a href="#" type='button' class="btn btn-primary">{issue.assignee}</a>
              </div>
            </a>
          ),
        };
      })];
      setState(updatedState);
    }
  }, [issues, selectedSprint]);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) { // if destination is null. it means that the item was not dropped in a droppable
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) { // if the item was dropped in the same place it was picked up from
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] }

    setState(prev => {
      prev = { ...prev } // creating a copy of state object
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1) // delete 1 item from source index


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      return {
        ...prev, // copying previous state
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: (
                <a href="./Chilsissue" class="card">
                  <div class="card-body">
                    <h5 class="card-title">{text}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" type='button' class="btn btn-primary">Go somewhere</a>
                  </div>
                </a>
              )
            },
            ...prev.todo.items
          ]
        }
      }
    })

    setText("")
  }

  const [inactive, setInactive] = React.useState(false);

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar

          onCollapse={(inactive) => {
            setInactive(inactive);
          }}

        />
        <div>
          <div className="activeSprint">
            <h2>Active Sprint</h2>
            <div className='dropDowns'>
              <select>
                <option>Team 1</option>
                <option>Team 2</option>
              </select>
              <select value={selectedSprint} onChange={(e) => setSelectedSprint(e.target.value)}>
                {
                  issues ? sprints.map((sprint, index) =>
                    <option key={index}>{sprint}</option>
                  )
                    : <option disabled>No Sprints</option>
                }
              </select>
            </div>
          </div>

          <div className="Appp">
            {/* <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button> 
      </div> */}
            <DragDropContext onDragEnd={handleDragEnd}>
              {_.map(state, (data, key) => {
                return (
                  <div key={key} className="column">
                    <h3 style={{ textAlign: 'center' }}>{data.title}</h3>
                    <StrictModeDroppable droppableId={key}>
                      {(provided, snapshot) => {
                        console.log(snapshot)
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={"droppable-col"}
                          >
                            {data.items.map((el, index) => { // el = element
                              return (
                                <Draggable key={el.id} index={index} draggableId={el.id}>
                                  {(provided, snapshot) => {
                                    console.log(snapshot)
                                    return (
                                      <div
                                        className={`item ${snapshot.isDragging && "dragging"}`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps} // This decides what you can use to drag the item
                                      >
                                        {el.name}
                                      </div>
                                    )
                                  }}
                                </Draggable>
                              )
                            })}
                            {provided.placeholder} {/* This is what makes the items move up when you drag one away */}
                          </div>
                        )
                      }}
                    </StrictModeDroppable>
                  </div>
                )
              })}
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveSprint;
