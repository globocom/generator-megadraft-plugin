/*
 * Copyright (c) <%= info.year %>, <%= inputs.authorName %> (<%= inputs.authorEmail || inputs.homepage %>)
 *
 * License: MIT
 */

import {PLUGIN_TYPE} from "../src/constants";

export default {
  entityMap: {
    "0": {
      type: PLUGIN_TYPE,
      mutability: "IMMUTABLE",
      data: {
        caption: "Plugin caption"
      }
    }
  },
  blocks: [
    {
      key: "ag6qs",
      text: "<%= inputs.pluginName %> - Megadraft Plugin",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: []
    },
    {
      key: "9vgd",
      text: "*",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ]
    }
  ]
};
