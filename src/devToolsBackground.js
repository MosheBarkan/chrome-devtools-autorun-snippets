//console.log(WebInspector.scriptSnippetModel);
var sourcesListener = function(whatEver) {
  console.log("[snippets]", whatEver);
};

chrome.devtools.panels.sources.onSelectionChanged.addListener(sourcesListener);
console.log("[snippets] added listener");
