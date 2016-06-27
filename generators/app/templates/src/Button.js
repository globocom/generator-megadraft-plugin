/*
 * Copyright (c) <%= info.year %>, <%= inputs.authorName %> (<%= inputs.authorEmail || inputs.homepage %>)
 *
 * License: MIT
 */

import React, {Component} from "react";
import {DraftJS} from "megadraft";

import Icon from "./icon.js";
import {PLUGIN_TYPE} from "./constants";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      caption: "Initial plugin text"
    };
    const entityKey = DraftJS.Entity.create(PLUGIN_TYPE, "IMMUTABLE", data);

    this.props.onChange(DraftJS.AtomicBlockUtils.insertAtomicBlock(
      this.props.editorState,
      entityKey,
      "*"
    ));
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.onClick}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}