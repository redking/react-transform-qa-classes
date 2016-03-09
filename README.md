# react-transform-qa-classes

Simple Babel plugin that adds classes to React component root nodes generated from the `displayName` or class name.

This was developed for a specific use case, but I guess it could be useful more generally (or at least as a code reference). 
It's an alpha release - I have yet to test it in the wild.

## Usage

You should have Babel 6 installed and setup, then run `npm install babel-plugin-react-transform react-transform-qa-classes --save-dev`.

Next setup .`babelrc`. In the example below, I have a special `env` value for QA testing. 

```js
{
	"env": {
		"qa": {
			"plugins": [
				["react-transform", {
					"transforms": [{
						"transform": "react-transform-qa-classes"
					}]
				}]
			]
		}
	}
}
```

Then launch babel or your build process with `BABEL_ENV=qa`.

## Result

Two classes are added to all component root nodes - `__qa` and `_qa_[displayName]` where `[displayName]` is the component `displayName` 
or class name in lowercase.

## Bookmarklet

`javascript:var comps = document.querySelectorAll('.__qa');[].forEach.call(comps, function(c, i){console.log(i, c.className, c);c.style.outline = '1px solid red'});`