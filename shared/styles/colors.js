// @flow
// the _on_white are precomputed colors so we can do less blending on mobile
const colors = {
  beige: '#f7f1eb',
  black: '#000000',
  black_05: 'rgba(0, 0, 0, 0.05)',
  black_05_on_white: 'rgb(242,242,242)',
  black_10: 'rgba(0, 0, 0, 0.10)',
  black_10_on_white: 'rgb(229,229,229)',
  black_20: 'rgba(0, 0, 0, 0.20)',
  black_20_on_white: 'rgb(204,204,204)',
  black_40: 'rgba(0, 0, 0, 0.40)',
  black_40_on_white: 'rgb(153,153,153)',
  black_60: 'rgba(0, 0, 0, 0.60)',
  black_60_on_white: 'rgb(102,102,102)',
  black_75: 'rgba(0, 0, 0, 0.75)',
  black_75_on_white: 'rgb(64,64,64)',
  blue: '#33a0ff',
  blue2: '#66b8ff',
  blue3: '#a8d7ff',
  blue3_20: 'rgba(168, 215, 255, 0.2)',
  blue3_20_on_white: 'rgb(238, 247, 255)',
  blue3_40: 'rgba(168, 215, 255, 0.4)',
  blue3_40_on_white: 'rgb(220, 239, 255)',
  blue3_60: 'rgba(168, 215, 255, 0.6)',
  blue3_60_on_white: 'rgb(203, 231, 255)',
  blue4: '#ebf5fc',
  blue5: '#F8FAFD',
  blue_30: 'rgba(51, 160, 255, 0.3)',
  blue_30_on_white: 'rgb(192,226,255)',
  blue_60: 'rgba(51, 160, 255, 0.6)',
  blue_60_on_white: 'rgb(133,198,255)',
  brown_60: 'rgba(71, 31, 17, 0.6)',
  brown_60_on_white: 'rgb(145,121,112)',
  darkBlue: '#004481',
  darkBlue2: '#0069C6',
  darkBlue3: '#002C52',
  darkBlue3_75: 'rgba(0, 44, 82, .75)',
  darkBlue3_75_on_white: 'rgb(64,97,125)',
  darkBlue4: '#003563',
  green: '#3dcc8e',
  green2: '#36b37c',
  green3: '#E8FAF3',
  grey: '#cccccc',
  lightGrey: '#f0f0f0',
  lightGrey2: '#e6e6e6',
  orange: '#ff6f21',
  red: '#ff4d61',
  red_75: 'rgba(255,0,0,0.75)',
  red_75_on_white: 'rgb(255,64,64)',
  transparent: 'rgba(0, 0, 0, 0)',
  transparent_on_white: '#ffffff',
  white: '#ffffff',
  white_0: 'rgba(255, 255, 255, 0)',
  white_0_on_white: '#ffffff',
  white_20: 'rgba(255, 255, 255, 0.20)',
  white_20_on_white: '#ffffff',
  white_40: 'rgba(255, 255, 255, 0.40)',
  white_40_on_white: '#ffffff',
  white_75: 'rgba(255, 255, 255, 0.75)',
  white_75_on_white: '#ffffff',
  white_90: 'rgba(255, 255, 255, 0.90)',
  white_90_on_white: '#ffffff',
  yellow: '#fff75a',
  yellow2: '#dbd22a',
  yellowGreen: '#a8cf36',
  yellowGreen2: '#94b52f',
  yellowGreen2_75: 'rgba(154, 180, 57, 0.75)',
  yellowGreen2_75_on_white: 'rgb(179,199,107)',
  yellowGreen3: '#d2e697',
}

export default colors
