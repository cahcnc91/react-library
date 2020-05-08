import React from "react";

const CloseIcon = props => {

  return (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 413.348 413.348"
      height="512"
      viewBox="0 0 413.348 413.348"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      className={props.classes}
      onClick={() => props.filterResults('')}
    >
      <path
        d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
        fill={props.classes.fill}
      />
    </svg>
  );
};

export default CloseIcon
