# 🔭 Some formulas (earth only 🌍)

Source : https://www.aa.quae.nl/en/reken/zonpositie.html

- [Time](#time)
- [The Mean Anomaly](#mean-anomaly)
- [The Equation of Center](#eq-center)
- [Perihelion and the Obliquity of the Ecliptic](#ob-eq)
- [Ecliptical Coordinates](#eclip)
- [Equatorial coordinates](#equat)
- [Geographical coordinates](#geog)
- [Sidereal time](#sidereal)
- [Horizontal coordinates](#horiz)
- [Solar transit](#transit)
  - [Find the date](#find-date)
- [Equation of Time](#eot)
- [Images](#Images)

## <a id="time"></a>Time

Julian Date
 - `JDN` : Julian Day Number `-4712/01/01 12:00:00 UTC`
 - <code>round<sub>down</sub>(JD)</code> : Julian Date : number of days since JDN
 - <code>JD<sub>2453144.5</sub> = 2004/05/19 00:00:00 UTC</code>
 - <code>J<sub>2000</sub> = 2451545</code>
 - <code>J<sub>2000</sub> = 2440588</code> (Unix)

Days
 - `d` : **day numbers** in calendar year (since January 1st)
 - *d<sub>1</sub> = yyyy/01/01 00:00:00*
 - *d<sub>2</sub> = yyyy/01/02 00:00:00*
 - *d<sub>32</sub> = yyyy/02/01 00:00:00*

## <a id="mean-anomaly"></a>The Mean Anomaly
`M(J)` : Position that the planet would have relative to its perihelion (nearest point around the Sun) if the orbit of the planet were a circle.
 - <code>M = (357.5291 + 0.98560028 * (J - J<sub>2000</sub>)) (mod 360°)</code>

## <a id="eq-center"></a>The Equation of Center
 - `ν` : **True Anomaly** : Angular distance of the Earth from the perihelion as seen from the Sun.
 - `ν = 89.0949`
- `C = ν - M` : **Equation of Center**

## <a id="ob-eq"></a>Perihelion and the Obliquity of the Ecliptic
 - `Π = 102.9373` : **Eclpitic longitude**
 - `ε = 23.4393` : **Obliquity**

## <a id="eclip"></a>Ecliptical Coordinates
- <code>λ<sub>sun</sub> = 12.0322°</code> : **Ecliptical longitude** : Position along the ecliptic relative to the vernal equinox
- <code>β<sub>sun</sub> = 0°</code> : **Eclipical latitude** : Perpendicular distance of the Sun from the ecliptic


## <a id="equat"></a>Equatorial coordinates
- <code>α<sub>sun</sub> = 11.0649°</code> : **Right ascension** (≈ longitude)
- <code>δ<sub>sun</sub> = 4.7565°</code> : **Declination** (≈ latitude)

## <a id="geog"></a>Geographical coordinates
- `φ` : **Latitude**
- <code>l<sub>w</sub></code> : **Longitude west**

## <a id="sidereal"></a>Sidereal time

`θ` : **Sidereal Time** : Right ascension that passes through the celestial meridian at that moment.
- <code>θ(J) = θ<sub>0</sub> + θ<sub>1</sub> * (J - J<sub>2000</sub>) - l<sub>w</sub> (mod 360°)</code>
- <code>θ<sub>0</sub> = 280.1470°</code> : Sidereal time at (longitude = 0), at J2000
- <code>θ<sub>1</sub> = 360.9856235°</code> : rate of change of the sidereal time, in degrees per day

## <a id="horiz"></a>Horizontal coordinates
`h` : **Altitude** : Position of a celestial body in the sky above the horizon (degree)
 - `0°` : horizon
 - `90°` : Zenith
 - `-90°` : Nadir

`A` : **Azimuth** : direction along the horizon, which we measure from south to west
 - `0°` : South
 - `90°` : West
 - `180°` : North
 - `270°` : East

`H`: **Hour angle** : difference in right ascension between that body and the meridian that is due south at that time

Horizontal coordinates from equatorial coordinates :
- <code>H = θ − α</code>
- <code>A = arctan(sin(H), cos(H) * sin(φ) − tan(δ) * cos(φ))</code>
- <code>h = arcsin(sin(φ) * sin(δ) + cos(φ) * cos(δ) * cos(H))</code>

## <a id="transit"></a>Solar transit

**Transit** : the moment when a body passes through the celestial meridian.

Trasnit(Sun) = 12h (solar time). The hour angle
`H` of the sun = 0

<code>θ = α<sub>sun</sub> (mod 360°)</code>

We can find :

<img src="https://latex.codecogs.com/gif.latex?J_\text{transit} = J_{2000} + J_0 + l_\text{w} \frac{J_3}{360°} + J_1 \sin M + J_2 \sin(2 L_\text{sun}) \pmod{J_3} \label{eq:Jdoor}">

Where :

 - <code>L<sub>sun</sub> = M + Π + 180°</code>
 - <code>J<sub>0</sub> = 0.0009</code>
 - <code>J<sub>1</sub> = 0.0053</code>
 - <code>J<sub>2</sub> = −0.0068</code>
 - <code>J<sub>3</sub> = 1</code>


### <a id="find-date"></a>Find the date and time of a solar transit near Julian Date `J` :

- <img src="https://latex.codecogs.com/png.latex?n_x = \frac{J - J_{2000} - J_0}{J_3} -\frac{l_\text{w}}{360}">

- <img src="https://latex.codecogs.com/png.latex?n = \text{round}(n_x)">

- <img src="https://latex.codecogs.com/gif.latex?J_x=J+J_3 \times (n - n_x)">

- <img src="https://latex.codecogs.com/gif.latex?J_\text{transit} = J_x + J_1 \sin(M) + J_2 \sin(2L_\text{sun}) - \frac{H}{360} \times J_3">

## <a id="eot"></a>Equation of Time

Name | Description | Where
--- | --- | ---
**True olar Time** | Sun is highest -> 12:00:00 hours. Not every day needs be equally long. | Sundial
**Mean solar time** | Runs in step with true solar time on average but in which all days are equally long | Clock or Watch
**Official clock time** | Mean solar time for a certain meridian (TZ) | Internet
[🔗See More](https://en.wikipedia.org/wiki/Solar_time)

`Δt` : **Equation of Time** : difference between the **mean solar time** and the **true solar time**

- `t` : Mean solar time (degree : 0° = 00:00, 180° = 12:00)
- `θ =(L + t + 180° (mod 360°)`
- `C = 7.7` Contribution of the orbit
- `S = 9.9` seasons
- `t = 180° + C +S (mod 24)`
- `Δt = C + S`
- <code>Δt<sub>hours</sub> = Δt<sub>degree</sub> / 15°</code>

# Rise and Set

 - <code>d<sub>sun</sub> = 0.53°</code> : Sun diametre
 - <code>h<sub>0</sub> = -0.83°</code> : Sunrise start

**Hour angle** at which the Sun with that <code>α<sub>sun</sub></code> , <code>δ<sub>sun</sub></code> rises or sets :
- if `H` is solution, `-H` is solution too
- <img src="https://latex.codecogs.com/gif.latex?H_\text{t} =  \arccos \left ( \frac{\sin h_0 - \sin \varphi \times \sin \delta}{\cos \varphi \times \cos \delta} \right )">

# Images

<table>
  <tr>
    <td><img src="https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A47987e14c8be51628fdc88654a1ddf519b4db5d028536c46ba589eab%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1"></td>
    <td><img src="https://s22380.pcdn.co/wp-content/uploads/RA-Dec-wiki-Tom-RuenCC-BY-SA-3.0.jpg"></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Meridian_on_celestial_sphere.png"></td>
  </tr>
</table>
