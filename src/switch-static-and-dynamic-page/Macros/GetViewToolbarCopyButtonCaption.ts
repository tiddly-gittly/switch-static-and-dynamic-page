declare var exports: {
  getVariable: (name: string) => string;
  name: string;
  params: Array<{ name: string }>;
  run: () => string;
};

exports.name = 'get-view-toolbar-copy-button-caption';

exports.params = [];

exports.run = function() {
  const staticPageUrl = this.getVariable('staticPageUrl');
  // limit staticPageUrl length to limited chars, end with ... if truncated
  const limit = 40;
  let truncatedUrl = staticPageUrl;
  if (truncatedUrl.length > limit) {
    truncatedUrl = truncatedUrl.substring(0, limit) + '...';
  }
  return `${truncatedUrl} ${$tw.wiki.getTiddlerText('$:/language/Buttons/CopyToClipboard/Caption') ?? '(Copy)'}`;
};
