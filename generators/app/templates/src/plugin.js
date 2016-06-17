/*
 * Copyright (c) <%= info.year %>, <%= inputs.authorName %> (<%= inputs.authorEmail || inputs.homepage %>)
 *
 * License: MIT
 */

import Button from "./Button";
import Block from "./Block";
import {PLUGIN_TYPE} from "./constants";

export default {
  type: PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block
};
