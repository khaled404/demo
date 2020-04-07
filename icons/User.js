import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
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
      className="prefix__feather prefix__feather-user">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}

export default SvgComponent;
