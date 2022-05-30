import React from "react";
import Filter from "../src/Assets/images/filter";
import DropDown from "../src/Assets/images/dropDown";
import GroupButton from "./GroupButon";
import List from "../src/Assets/images//list";
import Kanban from "../src/Assets/images/kanban";
import Add from "../src/Assets/images/add";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="box">
        <div className="bell-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.01242 5.93994V7.86661C4.01242 8.27327 3.83908 8.89327 3.63242 9.23994L2.86575 10.5133C2.39242 11.2999 2.71908 12.1733 3.58575 12.4666C6.45908 13.4266 9.55908 13.4266 12.4324 12.4666C13.2391 12.1999 13.5924 11.2466 13.1524 10.5133L12.3857 9.23994C12.1857 8.89327 12.0124 8.27327 12.0124 7.86661V5.93994C12.0124 3.73994 10.2124 1.93994 8.01242 1.93994C5.80575 1.93994 4.01242 3.73327 4.01242 5.93994Z"
              stroke="gray"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.60596 1.99988C7.96596 1.91988 7.35263 1.96655 6.7793 2.13321C6.97263 1.63988 7.45263 1.29321 8.01263 1.29321C8.57263 1.29321 9.05263 1.63988 9.24596 2.13321C9.0393 2.07321 8.82596 2.02655 8.60596 1.99988Z"
              stroke="gray"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0137 12.7068C10.0137 13.8068 9.11367 14.7068 8.01367 14.7068C7.46701 14.7068 6.96034 14.4801 6.60034 14.1201C6.24034 13.7601 6.01367 13.2535 6.01367 12.7068"
              stroke="gray"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className="text-box">
          <div className="text">Search</div>
          <div className="search-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3.75H15"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 6H12.75"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.75 8.625C15.75 12.5625 12.5625 15.75 8.625 15.75C4.6875 15.75 1.5 12.5625 1.5 8.625C1.5 4.6875 4.6875 1.5 8.625 1.5"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 16.5L15 15"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <section className="deals-container">
        <section className="deals-header">
          <div>
            <div className="deals-filter-dropdown">
              <div className="filter">{Filter(20, 20)}</div>
              <div className="deals-dropdown divider">
                <div className="deals-pipeline">General Pipeline</div>

                <div className="dropdown"> {DropDown(20, 20)} </div>
              </div>
              <div className="alldeals-dropdown">
                <div className="all">All Deals</div>
                <div className="dropdown"> {DropDown(20, 20)} </div>
              </div>
            </div>
          </div>

          <div className="Model-button">
            <div className="deals-buttons">
              <div className="group-btn-wrapper">
                <GroupButton
                  type="SVG"
                  titleName={["Kanban", "List"]}
                  titles={[Kanban(20, 20, "white"), List(20, 20, "gray")]}
                />
              </div>
              <span className="import-button">Import</span>
              <span className="add-button">
                <span className="add">{Add(20, 20)}</span>
                <span className="newdeal">New Deal</span>
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Header;
