import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const App = ({
  size = 10,
  gap = 10,
  bounceHeight = 10,
  colors = ['#3498db', '#e74c3c', '#f1c40f'], // Default colors
}) => {
  // Create an array of animated values, one for each dot
  const animatedValues = colors.map(() => new Animated.Value(0));

  // Create a wave-like animation for each dot
  const startAnimation = () => {
    animatedValues.forEach((animatedValue, index) => {
      // Apply a staggered delay for each dot to create the wave effect
      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ).start();
      }, index * 200); // Delay between each dot's start (adjust for desired wave speed)
    });
  };

  React.useEffect(() => {
    startAnimation();
  }, [colors]);

  const dots = animatedValues.map((animatedValue, index) => {
    // Interpolate the animated value to create the wave effect
    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -bounceHeight],
    });

    return (
      <Animated.View
        key={index}
        style={[
          styles.dot,
          {
            width: size,
            height: size,
            marginHorizontal: gap / 2,
            backgroundColor: colors[index % colors.length], // Use color from array
            transform: [{ translateY }],
          },
        ]}
      />
    );
  });

  return <View style={styles.container}>{dots}</View>;
};
App.propTypes = {
  size: PropTypes.number,
  gap: PropTypes.number,
  bounceHeight: PropTypes.number,
  colors: PropTypes.array
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  dot: {
    borderRadius: 50,
  },
});

export default App;
