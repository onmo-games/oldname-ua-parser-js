Package.describe({
  name: 'evenius:oldname-ua-parser-js',
  version: '2.0.0-beta.2',
  summary: 'Lightweight JavaScript-based user-agent string parser without breaking name changes',
  git: 'https://github.com/evenius/oldname-ua-parser-js.git',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.addFiles("src/ua-parser.js");
  api.export("UAParser");
});
