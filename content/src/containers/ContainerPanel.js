import React from "react";
import "./ContainerPanel.css"

export default function ContainerPanel(props) {
  return (
    <div
      className="card card-styling"
    >
      {props.header && <div className="card-header header-footer-padding">
        <h3>{props.header}</h3>
      </div>}
      {props.children && <div className="card-body">{props.children}</div>}
      {props.footer && <div className="card-footer header-footer-padding text-right">
        {props.footer}
      </div>}
    </div>
  );
}
