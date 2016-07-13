//console.log(WebInspector.scriptSnippetModel);
var sourcesListener = function(whatEver) {
  // THis should be called but isn't
  console.log("[snippets]", whatEver);
};

// register a listener for the sources panel.
chrome.devtools.panels.sources.onSelectionChanged.addListener(sourcesListener);

console.log("[snippets] added listener");
