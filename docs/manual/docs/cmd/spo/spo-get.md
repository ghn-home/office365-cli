# spo get

Gets the context URL for the root SharePoint site collection and SharePoint tenant admin site

## Usage

```sh
spo get [options]
```

## Options

Option|Description
------|-----------
`--help`|output usage information
`--query [query]`|JMESPath query string. See [http://jmespath.org/](http://jmespath.org/) for more information and examples
`-o, --output [output]`|Output type. `json|text`. Default `text`
`--pretty`|Prettifies `json` output
`--verbose`|Runs command with verbose logging
`--debug`|Runs command with debug logging

## Remarks

Office 365 CLI automatically discovers the URL of the root SharePoint site collection/SharePoint tenant admin site (whichever is needed to run the particular command). Using this command you can see which URLs the CLI has discovered.

## Examples

Get the context URL for the root SharePoint site collection and SharePoint tenant admin site

```sh
spo get --output json
```