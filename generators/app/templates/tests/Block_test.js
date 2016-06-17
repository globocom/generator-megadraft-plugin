/*
 * Copyright (c) <%= info.year %>, <%= inputs.authorName %> (<%= inputs.authorEmail || inputs.homepage %>)
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import chai from "chai";
import sinon from "sinon";

import Block from "../src/Block";

let expect = chai.expect;

describe("Block", function () {
  beforeEach(function () {
    this.data = {
      caption: "media caption"
    };

    this.setReadOnly = sinon.spy();
    this.updateEntity = sinon.spy();
    this.remove = sinon.spy();

    this.wrapper = TestUtils.renderIntoDocument(
      <Block container={this} blockProps={this} data={this.data} />
    );

    this.caption = TestUtils.scryRenderedDOMComponentsWithTag(this.wrapper, "input")[0];
  });

  it("renders caption from data", function () {
    expect(this.caption.value).to.be.equal(this.data.caption);
  });

  it("updates entity on caption change", function () {
    this.caption.value = "new caption";
    TestUtils.Simulate.change(this.caption);
    expect(this.updateEntity.calledWith({caption: "new caption"})).to.be.true;
  });

  it("your tests here...", function () {
    expect(true).to.be.false;
  });
});
