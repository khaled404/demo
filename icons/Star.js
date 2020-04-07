import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ICON_SIZE, Colors} from './IconConstants';

function SvgComponent({active}) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill={active ? Colors.primary : 'none'}
      stroke={active ? Colors.primary : Colors.border}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-star">
      <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Svg>
  );
}

export default SvgComponent;
