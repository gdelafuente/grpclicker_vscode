# Change Log

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

## [0.0.11]

> July 28, 2022

- Fixed toolkit reference

## [0.0.10]

> July 28, 2022

- Changed views mostly to vscode styled inputs
- Added waiter spinner for loading of request
- Added ability to switch host inside webview

## [0.0.9]

> July 26, 2022

- Made responses colorizable due to error/success response in response panel
- Corrected empty request parsing mechanism

## [0.0.8]

> July 25, 2022

- Added request history

## [0.0.7]

> July 24, 2022

- Fixed webview lifecicle, corrected dispose listener in webview
- grpcurl module refactoring
- made host and metadata in webview updatable

## [0.0.6]

> July 24, 2022

- Added caching of input values in input panel
- Corrected metadata on request

## [0.0.5]

> July 24, 2022

- Added tags for search to `package.json`
- Documentation corrections

## [0.0.4]

> July 23, 2022

- Added walkthrow to extension launch

## [0.0.3]

> July 23, 2022

- Fixes in `package.json`
- Fixes in documentation
- Removed async extension initialization
- Fixed host issue on app initialization
- Added request metadata

## [0.0.2]

> July 23, 2022

- Files with authoring and documentation

## [0.0.1]

> July 23, 2022

- Initial release

Extension provides following functionality:

- execute `gRPC` calls from `VSCode`
- view comlpete proto definition with field, message and service description
- easily save and switch between proto hosts
- add metadata to request, enable and disable it with one click
