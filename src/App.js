import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Sort from "../src/Assets/images/sort";
import Profile from "../src/Assets/images/profile.jpeg";
import _ from "lodash";
import { v4 } from "uuid";
import Header from "./Header";

const item1 = {
  id: v4(),
  name: "IOS and Android",
  price: "$12,000  •",
  date: "Closing in 2 days",
};

const item2 = {
  id: v4(),
  name: "Mobile Assistance",
  price: "$14,000  •",
  date: "Closing in 4 days",
};
const item3 = {
  id: v4(),
  name: "Finance Software",
  price: "$16,000  •",
  date: "Closing in 6 days",
};

const item4 = {
  id: v4(),
  name: "Zoho",
  price: "$18,000  •",
  date: "Closing in 8 days",
};

const item5 = {
  id: v4(),
  name: "Alemco",
  price: "$20,000  •",
  date: "Closing in 10 days",
};

const item6 = {
  id: v4(),
  name: "Communication",
  price: "$22,000  •",
  date: "Closing in 12 days",
};
const item7 = {
  id: v4(),
  name: "Website Optimization",
  price: "$24,000  •",
  date: "Closing in 14 days",
};
const item8 = {
  id: v4(),
  name: "Reservation Management",
  price: "$26,000  •",
  date: "Closing in 16 days",
};
const item9 = {
  id: v4(),
  name: "Web App",
  price: "$26,000  •",
  date: "Closing in 16 days",
};
const item10 = {
  id: v4(),
  name: "HR Management",
  price: "$26,000  •",
  date: "Closing in 16 days",
};
const item11 = {
  id: v4(),
  name: "Optimization",
  price: "$26,000  •",
  date: "Closing in 16 days",
};
const item12 = {
  id: v4(),
  name: "Finance",
  price: "$26,000  •",
  date: "Closing in 16 days",
};

function App() {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    New: {
      title: "New",
      items: [item1, item2],
      amount: "$18,900  •",
      value: "3 deals",
    },
    Approved: {
      title: "Approved",
      items: [item3, item4],
      amount: "$18,900  •",
      value: "3 deals",
    },
    FollowUp: {
      title: "Follow Up",
      items: [item5, item6],
      amount: "$18,900  •",
      value: "3 deals",
    },
    UnderReview: {
      title: "Under Review",
      items: [item7, item8],
      amount: "$18,900  •",
      value: "3 deals",
    },
    Demo: {
      title: "Demo",
      items: [item9, item10],
      amount: "$18,900  •",
      value: "3 deals",
    },
    Navigation: {
      title: "Navigation",
      items: [item11, item12],
      amount: "$18,900  •",
      value: "3 deals",
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };
  const contacts = [1, 2];
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <section className="">
        <DragDropContext onDragEnd={handleDragEnd}>
          <section className="deals-section">
            <div className="divider">
              {_.map(state, (data, key) => {
                return (
                  <div key={key} className={"column"}>
                    <div className="deals-column--header">
                      <div className="deals2">
                        <div className="title">{data.title}</div>
                        <div className="av">
                          <div className="amount">{data.amount}</div>
                          <div className="value">{data.value}</div>
                        </div>
                      </div>
                      <div>
                        <span className="sort">{Sort(15, 15)}</span>
                      </div>
                    </div>

                    <Droppable droppableId={key}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`${
                              snapshot.isDraggingOver ? "drag" : "deals-column"
                            }`}
                          >
                            {data.items.map((el, index) => {
                              return (
                                <Draggable
                                  key={el.id}
                                  index={index}
                                  draggableId={el.id}
                                >
                                  {(provided, snapshot) => {
                                    console.log(snapshot);
                                    return (
                                      <div
                                        className={`${
                                          snapshot.isDragging
                                            ? "ondraggable"
                                            : "deal-card"
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <span className="name"> {el.name}</span>
                                        <span className="price">
                                          {" "}
                                          <span>{el.price}</span>
                                          <span className="date">
                                            {el.date}
                                          </span>
                                        </span>
                                        <div className="container">
                                          <div className="deal-contact">
                                            {contacts.map((contact) => (
                                              <div className="contact-pic ">
                                                <img
                                                  className="contact-image"
                                                  src={Profile}
                                                  alt="profile"
                                                ></img>
                                              </div>
                                            ))}
                                          </div>
                                          <div id="deal-card">
                                            <div className="dc">
                                              <input
                                                type="checkbox"
                                                className="cardcheckbox"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </section>
        </DragDropContext>
      </section>
    </div>
    // </div>
  );
}

export default App;