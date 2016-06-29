/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;


export default class Block extends Component {
  constructor(props) {
    super(props);

    this._handleCaptionChange = ::this._handleCaptionChange;
    this._handleEdit = ::this._handleEdit;

    this.defaultFeatured = "medium";
    this.featuredOptions = [
      {"key": "small", "icon": MegadraftIcons.MediaSmallIcon, "label": "SMALL"},
      {"key": "medium", "icon": MegadraftIcons.MediaMediumIcon, "label": "MEDIUM"},
      {"key": "big", "icon": MegadraftIcons.MediaBigIcon, "label": "BIG"}
    ];
    this.actions = [
      {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleEdit() {
    alert(JSON.stringify(this.props.data, null, 4));
  }

  _handleCaptionChange(event) {
    this.props.container.updateEntity({caption: event.target.value});
  }

  render(){
    return (
      <CommonBlock {...this.props} featuredOptions={this.featuredOptions} actions={this.actions} defaultFeatured={this.defaultFeatured}>
        <BlockContent>
          <pre>{this.props.data.caption || "- NO TEXT -"}</pre>
        </BlockContent>

        <BlockData>
          <BlockInput
            placeholder="Caption"
            value={this.props.data.caption}
            onChange={this._handleCaptionChange} />
        </BlockData>
      </CommonBlock>
    );
  }
}
