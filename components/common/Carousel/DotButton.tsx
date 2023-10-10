import { MouseEventHandler } from "react";

export const DotButton = ({ selected, onClick } : { selected: Boolean, onClick: MouseEventHandler  }) => (
    <button
      className={`embla__dot ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={onClick}
    />
  );