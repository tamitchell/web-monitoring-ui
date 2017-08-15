export const diffTypes = {
  HIGHLIGHTED_TEXT: 'highlighted text',
  HIGHLIGHTED_SOURCE: 'highlighted source',
  HIGLIGHTED_RENDERED: 'higlighted rendered',
  SIDE_BY_SIDE_RENDERED: 'side-by-side rendered',
  SIDE_BY_SIDE_TEXT: 'side-by-side text',
  CHANGES_ONLY_TEXT: 'changes only text',
  CHANGES_ONLY_SOURCE: 'changes only source'
};

// TODO - map each diffType to it's corresponding endpoint string
export const changeDiffTypes = {
  [diffTypes.HIGHLIGHTED_TEXT]: 'html_text',
  // Commented out because this differ has some issues right now
  // [diffTypes.HIGHLIGHTED_SOURCE]: 'html_source',
  [diffTypes.HIGHLIGHTED_SOURCE]: 'source',
  [diffTypes.SIDE_BY_SIDE_RENDERED]: 'html_source',  // HACK
  [diffTypes.CHANGES_ONLY_TEXT]: 'html_text',
  [diffTypes.CHANGES_ONLY_SOURCE]: 'html_source'
};
