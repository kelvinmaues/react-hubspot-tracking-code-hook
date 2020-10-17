# React HubSpot Tracking Code Hook

<div style="display: flex; justify-content:space-between; width: 55%">

[![npm](https://img.shields.io/npm/dt/react-hubspot-tracking-code-hook.svg?style=flat-square)](https://www.npmjs.com/package/react-hubspot-tracking-code-hook)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
</div>

A custom hook to use the HubSpot Tracking Code API function.

With this custom hook, you can easily use the [HubSpot Tracking Code API](https://developers.hubspot.com/docs/api/events/tracking-code) function.

## Features

- [x] Set Page Path
- [x] Track Page View
- [x] Identify a visitor
- [x] Track events - Events JavaScript API

## Next features

- [ ] Remove cookies
- [ ] Get privacy consent status
- [ ] Place do not track cookie
- [ ] Reapply analytics event handlers
- [ ] Get cross-domain linking parameters

## Guide

- [React HubSpot Tracking Code Hook](#react-hubspot-tracking-code-hook)
  - [Features](#features)
  - [Next features](#next-features)
  - [Guide](#guide)
  - [Installation](#installation)
  - [How to use](#how-to-use)
      - [Basic](#basic)
  - [API](#api)
  - [License](#license)
  - [Contributors ✨](#contributors-)

## Installation

First step, install the HubSpot tracking code in your React project following the [HubSpot documentation](https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code) about it.

_Tip: You can copy and paste the script code directly in the `public/index.html` file or use the Google Tag Manager to install as a pixel._

then,

```bash
$ yarn add react-hubspot-tracking-code-hook
# or
$ npm install react-hubspot-tracking-code-hook
```

## How to use

This library is using the global function `window._hsq` that's initialized from HubSpot tracking code.

#### Basic

```typescript jsx
import React from "react";
import { useTrackingCode } from "react-hubspot-tracking-code-hook";

const App = () => {
  const { setPathPageView, setIdentity } = useTrackingCode();

  setPathPageView("/home");

  setIdentity("your-email@provider.com");

  return <div>My app</div>;
};
```

## API

`useTrackingCode` provides the functions from HubSpot tracking code;


|  Names 	|  Params 	|  Required 	|  Info 	|
|--------------------	|--------------------	|---------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|  `setPathPageView` 	|  `pathName: string` 	|  **YES** 	|  Set the path to the current page will be treated. This function should be used to update the current page whenever a page is loaded. After using this function to update the path, it will call the `setTrackPageView` function to track the view of the current page. 	|
|  `setTrackPageView` 	|  x 	|  x 	|  This function is called when the tracking code is loaded on a page, but you can manually call this function to track subsequent views in a single page application. 	|
|  `setIdentity` 	|  `(email: string, otherProperties: object)` 	|  **email: YES** 	|  This function is used to identify a visitor to your site. The unique identifier is an email address. If there is an existing contact record for that email address, it will be updated. Otherwise, a new contact record will be created. In both cases, the analytics data collected for the visitor will be associated with the contact record. 	|
|  `setTrackEvent` 	|  `({eventId: string, value: number | string})` 	|  **eventId: YES** 	|  This function is used to track an event using JavaScript and HubSpot's tracking code. You can use events to track specific activities completed by visitors on your site. Tracked events can show up in contacts' timelines. 	|

## License

`react-hubspot-tracking-code-hook` is under MIT License

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kelvinmaues.github.io/"><img src="https://avatars0.githubusercontent.com/u/11196828?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kelvin Maues</b></sub></a><br /><a href="https://github.com/kelvinmaues/react-hubspot-tracking-code-hook/commits?author=kelvinmaues" title="Documentation">📖</a> <a href="https://github.com/kelvinmaues/react-hubspot-tracking-code-hook/commits?author=kelvinmaues" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
