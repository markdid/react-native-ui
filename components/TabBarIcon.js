import React from 'react';
import { Image } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Image
      name={props.name || ""}
      source={(props.focused ? props.focusedIcon : props.icon)}
      size={26}
      style={{ marginBottom: -3}}
    />
  );
}
