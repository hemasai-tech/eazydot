declare module 'loadingdot-animation' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export interface LoadingDotProps {
    /** Size of each dot in pixels (default: 10) */
    size?: number;
    /** Array of colors for the dots (default: ['#3498db', '#e74c3c', '#f1c40f']) */
    colors?: string[];
    /** Speed of animation (not implemented in the component, so remove or add functionality if needed) */
    speed?: number;
    /** Gap between dots in pixels (default: 10) */
    gap?: number;
    /** Height the dots bounce (default: 10) */
    bounceHeight?: number;
    /** Custom styles for the container view */
    style?: ViewStyle;
  }

  const LoadingDotAnimation: React.FC<LoadingDotProps>;
  export default LoadingDotAnimation;
}
