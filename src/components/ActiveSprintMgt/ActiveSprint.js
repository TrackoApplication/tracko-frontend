import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import './ActiveSprint.css';

const item = {
  id: v4(), // v4 is a function that generates a random id
  name: (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" type='button' class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
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
      items: [item, item2]
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

  const handleDragEnd = ({destination, source}) => {
    if (!destination) { // if destination is null. it means that the item was not dropped in a droppable
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) { // if the item was dropped in the same place it was picked up from
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev} // creating a copy of state object
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
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{text}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" type='button' class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              )
            },
            ...prev.todo.items
          ]
        }
      }
    })

    setText("")
  }

  return (
    <div>
    <div className="activeSprint">
    <h2>Active Sprint</h2>
    <div className='dropDowns'>
      <select>
        <option>Team 1</option>
        <option>Team 2</option>
      </select>
      <select>
        <option>Sprint 1</option>
        <option>Sprint 2</option>
        <option>Sprint 3</option>
        <option>Sprint 4</option>
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
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  console.log(snapshot)
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => { // el = element
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                              console.log(snapshot)
                              return(
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
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
    </div>
  );
}

export default ActiveSprint;
