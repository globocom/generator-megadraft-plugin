/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";

export default {
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block
};
