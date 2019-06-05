/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import React from "react";
import { mount } from "enzyme";

import Block from "../src/Block";

describe("Block", function() {
  let caption, updateData, data;

  beforeEach(function() {
    data = {
      caption: "media caption"
    };
    updateData = jest.fn();
    const container = {
      updateData,
      setReadOnly: jest.fn(),
      remove: jest.fn(),
      plugin: jest.fn()
    };

    const wrapper = mount(
      <Block container={container} blockProps={container} data={data} />
    );

    caption = wrapper.find("BlockInput");
  });

  it("renders caption from data", function() {
    expect(caption.prop("value")).toEqual(data.caption);
  });

  it("updates entity on caption change", function() {
    caption.props().onChange({
      target: {
        value: "new caption"
      }
    });
    expect(updateData).toHaveBeenCalledWith({ caption: "new caption" });
  });

  it("your tests here...", function() {
    expect(true).toBeFalsy();
  });
});
