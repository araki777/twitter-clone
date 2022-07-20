import React from 'react'
import "./SidebarOption.scss"

interface Props {
  text: string,
  Icon: any
}

const SidebarOption: React.FC<Props> = ({ text, Icon }) => {
  return (
    <div className="SidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
