import React from "react";
import "./SidebarOption.scss";

interface Props {
  text: string;
  Icon: React.ElementType;
}

const SidebarOption: React.FC<Props> = (props) => {
  return (
    <div className="SidebarOption">
      <props.Icon />
      <h2>{props.text}</h2>
    </div>
  );
};

export default SidebarOption;
