/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import constants from "../src/constants";

export default {
  entityMap: {},
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
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      text: "",
      data: {
        type: constants.PLUGIN_TYPE,
        caption: "Plugin caption"
      },
      entityRanges: []
    },
    {
      key: "6dge",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      text: "",
      entityRanges: []
    }
  ]
};
