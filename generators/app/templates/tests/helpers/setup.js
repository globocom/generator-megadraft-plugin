/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import jsdom from "jsdom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;
global.self = global;

/**
 * Take all the properties of the window object and attach them to the mocha
 * global object. This is to prevent 'undefined' errors which sometime occur.
 * Gotten from: http://jaketrent.com/post/testing-react-with-jsdom/
 * @param  {object} window: The fake window, build by jsdom
 */
(window => {
  for (let key in window) {
    // eslint-disable-next-line no-prototype-builtins
    if (!window.hasOwnProperty(key)) {
      continue;
    }

    if (key in global) {
      continue;
    }

    global[key] = window[key];
  }
})(global.window);
