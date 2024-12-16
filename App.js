import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const App = ({
  size = 10,
  gap = 10,
  bounceHeight = 10,
  colors = ['#3498db', '#e74c3c', '#f1c40f'], // Default colors
}) => {
  const animatedValues = useRef(colors.map(() => new Animated.Value(0))).current;

  // Start wave-like animation
  const startAnimation = () => {
    animatedValues.forEach((animatedValue, index) => {
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
    });
  };

  useEffect(() => {
    startAnimation();
    return () => {
      // Stop animations on unmount
      animatedValues.forEach((animatedValue) => animatedValue.stopAnimation());
    };
  }, [colors]); // Restart animation if colors change

  const dots = animatedValues.map((animatedValue, index) => {
    // Interpolate to create the wave effect
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
            backgroundColor: colors[index % colors.length],
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
  colors: PropTypes.arrayOf(PropTypes.string),
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
