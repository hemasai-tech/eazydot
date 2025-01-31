import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { DotAnimationProps } from './types';

const DotAnimation: React.FC<DotAnimationProps> = ({
  size = 10,
  gap = 10,
  bounceHeight = 20,
  colors = ['#000'],
}) => {
  const dots = Array(3).fill(null);
  const animations = dots.map(() => useRef(new Animated.Value(0)).current);

  const animate = () => {
    const animationSequence = dots.map((_, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animations[index], {
            toValue: -bounceHeight,
            duration: 600,
            useNativeDriver: true,
            delay: index * 100,
          }),
          Animated.timing(animations[index], {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      )
    );

    Animated.stagger(100, animationSequence).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={styles.container}>
      {dots.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: colors[index % colors.length],
              marginHorizontal: gap / 2,
              transform: [{ translateY: animations[index] }],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'relative',
  },
});

export default DotAnimation;