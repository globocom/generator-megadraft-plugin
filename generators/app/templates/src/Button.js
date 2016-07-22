/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import React, {Component} from "react";
import {DraftJS} from "megadraft";

import Icon from "./icon.js";
import constants from "./constants";
import {insertMediaBlock} from "megadraft";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      caption: "Initial plugin text"
    };

    insertMediaBlock(this.props.editorState, constants.PLUGIN_TYPE, data);
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}
