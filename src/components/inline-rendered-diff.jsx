import React from 'react';
import {removeStyleAndScript} from '../scripts/html-transforms';
import SandboxedHtml from './sandboxed-html';

/**
 * @typedef {Object} InlineRenderedDiffProps
 * @property {DiffData} diffData Object containing diff to render and its metadata
 * @property {Page} page The page this diff pertains to
 * @property {boolean} removeFormatting
 */

/**
 * Display two versions of a page with their changes inline together.
 *
 * @class InlineRenderedDiff
 * @extends {React.Component}
 * @param {InlineRenderedDiffProps} props
 */
export default class InlineRenderedDiff extends React.Component {
  render () {
    const diff = this.props.diffData.combined || this.props.diffData.diff;
    const transformDocument = this.props.removeFormatting && removeStyleAndScript;

    return (
      <div className="inline-render">
        <SandboxedHtml html={diff} baseUrl={this.props.page.url} transform={transformDocument}/>
      </div>
    );
  }
}
