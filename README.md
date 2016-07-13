Chrome DevTools Extension : Automatically run snippets
=========================================

*Work in progress*

This extension will add the ability to the Chrome devtools snippets panel to auto-run a snippt on opening of a devtool window.

Rationale:
-------------

Every time I write
```
aPromise.then(function(data) { console.log(data); });
```
I cringe!

Would be nice to write:
```
aPromise.then(debugPromise).then(...);
```

This extension will add the ability to a snippet page to auto-execute and thus add functions to the devtools global object scope.

I hope ;)
