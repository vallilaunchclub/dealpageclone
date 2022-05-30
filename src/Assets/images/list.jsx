import React from "react";

function Settings(width=20, height=20, color='white') {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      style={{fill: `${color}`}}
    >
      <path d="M5.467 4.333c-1.063 0-2.056.164-2.781.753-.779.633-1.019 1.558-1.019 2.521v4.119c0 .963.241 1.888 1.019 2.521.725.589 1.718.753 2.781.753h21.067c1.063 0 2.056-.164 2.781-.753.779-.633 1.019-1.558 1.019-2.521V7.607c0-.963-.241-1.888-1.019-2.521-.725-.589-1.718-.753-2.781-.753H5.467zm-1.8 3.274c0-.658.159-.87.281-.969.175-.142.582-.305 1.519-.305h21.067c.937 0 1.344.162 1.519.305.121.099.281.311.281.969v4.119c0 .658-.159.87-.281.969-.175.142-.582.305-1.519.305H5.467c-.937 0-1.344-.162-1.519-.305-.121-.099-.281-.31-.281-.969V7.607zM4.907 17c-.903 0-1.794.179-2.433.827-.635.645-.807 1.54-.807 2.446v4.119c0 .907.172 1.801.807 2.446.639.649 1.53.827 2.433.827H21.76c.903 0 1.794-.179 2.433-.827.635-.645.807-1.54.807-2.446v-4.119c0-.907-.173-1.801-.807-2.446-.639-.649-1.53-.827-2.433-.827H4.907zm-1.24 3.274c0-.715.147-.957.233-1.043.081-.083.31-.23 1.007-.23H21.76c.697 0 .926.148 1.007.23.085.087.233.329.233 1.043v4.119c0 .715-.147.957-.233 1.043-.081.083-.31.23-1.007.23H4.907c-.697 0-.926-.148-1.007-.23-.085-.087-.233-.329-.233-1.043v-4.119z"></path>
    </svg>
  );
}

export default Settings;
