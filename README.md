# sun-position
[![License](https://img.shields.io/github/license/Jeremy38100/sun-position)](LICENSE)
[![Version](https://img.shields.io/npm/v/sun-position.svg)](https://www.npmjs.com/package/sun-horizon)
[![Build Status](https://travis-ci.org/Jeremy38100/sun-position.svg?branch=master)](https://travis-ci.org/Jeremy38100/sun-position)

To calculate sun position you can play with 5 members :
 - 📌 Location (lat, lng)
 - 📅 Day
 - 🕰 Time of day
 - 🧭 Azimuth
 - 📐 Angle

This module calculates this 5 members from **Location**, **Day** and **one of the 3 others** (See [Functions](#Functions))

## ☕️ Support
<a href="https://www.buymeacoffee.com/jOVt3wg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="42" ></a>
<a href="https://www.paypal.me/Jeremy38100" target="_blank"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" height="42" alt="PayPal"></a>

## 🏁 Install
`npm install sun-position`

## 🏃‍♂️ Usage

This module supports __javascript__ or __typescirpt__.

```js
const sunPosition = require('sun-position');
```

or

```ts
import { getPositionAtAzimuth } from 'sun-position';
```

## Types

### LatLng
```ts
{
  lat: number;
  lng: number;
}
```

### SunPosition
```ts
{
  origin: LatLng;
  date: string; // yyyy/mm/dd
  timeOfDay: string, // hh:mm:ss
  azimuth: number; // in degree [0, 360[
  angle: number; // in degrre [-90, 90]
}
```

## Functions

### 🕰 `getPositionAtTime`

```ts :
getPositionAtTime(origin: LatLng, date: string, time: string): SunPosition
```

### 🧭 `getPositionAtAzimuth`

```ts :
getPositionAtAzimuth(origin: LatLng, date: string, azimuth: number): SunPosition
```

### 📐 `getPositionsAtAngle`

```ts
getPositionsAtAngle(origin: LatLng, date: string, angle: number): SunPosition[]
```

❗️return `[]` if the sun never reaches out `angle` at `date`.