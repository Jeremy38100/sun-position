export interface LatLng {
  lat: number;
  lng: number;
}

export interface SunPosition {
  origin: LatLng;
  date: string; // yyyy/mm/dd
  timeOfDay: string, // hh:mm:ss
  azimuth: number; // in degree [0, 360[
  angle: number; // in degrre [-90, 90]
}

export function getPositionAtTime(origin: LatLng, date: string, time: string): SunPosition {
  throw new Error('TODO');
}
export function getPositionAtAzimuth(origin: LatLng, date: string, azimuth: number): SunPosition {
  throw new Error('TODO');
}
export function getPositionsAtAngle(origin: LatLng, date: string, angle: number): SunPosition[] {
  throw new Error('TODO');
}