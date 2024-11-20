
## eazydot Loader
Elevate your Loader component with these customizable dot animation.

# Installation
npm i loadingdot-animation

# Based on the colors array you'll get the dot count.
For eg:- if you want to display 4 dots you have to pass 4 colors in the colors prop.

# Restart the Application and clean the cache if there's change in the props.

# Properties 
| Prop           | Type     | Default Value                | Description                           |
|----------------|----------|------------------------------|---------------------------------------|
| `size`         | `number` | `10`                         | The diameter of each dot.             |
| `gap`          | `number` | `5`                          | The horizontal spacing between the dots. |
| `bounceHeight` | `number` | `10`                         | The height of the bounce animation.   |
| `colors`       | `string[]` | `['#3498db', '#e74c3c', '#f1c40f']` | Array of colors for the dots.         |


# Example Usage

import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import DotAnimation from 'loadingdot-animation';

const { height, width } = Dimensions.get('window');

const Loader = ({ loading, loadingTxt, loaderSub }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <DotAnimation
        size={10}
        gap={10}
        bounceHeight={20}
        colors={['#ff5733', '#33ff57', '#3357ff']} // Custom colors
      />
      {loadingTxt ? <Text style={styles.laodtxt}>{loadingTxt}</Text> : null}
      {loaderSub ? <Text style={styles.laodtxtSub}>{loaderSub}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255,240,240,0.6)',
  },
   laodtxt: {
    fontSize: 18,
    color: colors.productPriceColor,
    fontFamily: 'Manrope-Bold',
  },
  laodtxtSub: {
    fontSize: 16,
    color: colors.productPriceColor,
    fontFamily: 'Manrope-SemiBold',
  },
});

export default Loader;

