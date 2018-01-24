# spo hubsite register

Registers the specified site collection as a hub site

## Usage

```sh
spo hubsite register [options]
```

## Options

Option|Description
------|-----------
`--help`|output usage information
`-u, --url <url>`|URL of the site collection to register as a hub site
`-o, --output [output]`|Output type. `json|text`. Default `text`
`--verbose`|Runs command with verbose logging
`--debug`|Runs command with debug logging

!!! important
    Before using this command, connect to a SharePoint Online site, using the [spo connect](../connect.md) command.

## Remarks

To register a site collection as a hub site, you have to first connect to a SharePoint site using the [spo connect](../connect.md) command, eg. `spo connect https://contoso.sharepoint.com`.

If the specified site collection is already registered as a hub site, you will get a `This site is already a HubSite.` error.

## Examples

Register the site collection with URL _https://contoso.sharepoint.com/sites/sales_ as a hub site

```sh
spo hubsite register --url https://contoso.sharepoint.com/sites/sales
```

## More information

- SharePoint hub sites new in Office 365: [https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547](https://techcommunity.microsoft.com/t5/SharePoint-Blog/SharePoint-hub-sites-new-in-Office-365/ba-p/109547)