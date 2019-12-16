import { LatLng, getPositionAtTime, getPositionAtAzimuth, getPositionsAtAngle } from './index';
import { expect } from 'chai';

describe('Test user-end features', () => {
  const grenoble: LatLng = {
    lat: 45.185739,
    lng: 5.736236
  };
  const summer = '2019/06/21';

  it ('Should getPositionAtTime', () => {
    console.log(getPositionAtTime(grenoble, summer, '12:00:00'));
  });
  it ('Should getPositionAtAzimuth', () => {
    console.log(getPositionAtAzimuth(grenoble, summer, 180));
  });
  it ('Should getPositionsAtAngle', () => {
    console.log(getPositionsAtAngle(grenoble, summer, 60));
  });
});