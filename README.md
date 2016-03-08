# react-transform-qa-classes

Simple Babel plugin that adds classes to React component root nodes generated from the `displayName`. This was developed
for a specific use case, but I guess it could be useful more generally.

## Usage

In this example, add the following to .`babelrc`

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

Then launch your build process with `BABEL_ENV=qa`.

## Result

Two classes are added to all component root nodes - `__qa` and `_qa_[displayName]` where `[displayName]` is the component `displayName` 
(or class name) in lowercase.
