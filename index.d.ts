import * as React from 'react';
import { ImageProps } from 'react-native';

interface TSource {
  uri: string;
}

export interface AutoHeightImageProps extends ImageProps {
  as?: React.ComponentType<any>;
  defaultHeight?: number;
  source: number | TSource;
  width: number;
  fallbackSource?: number | TSource;
  onHeightChange?: (height: number) => void;
}

declare class AutoHeightImage extends React.Component<
  AutoHeightImageProps,
  any
> {}

export default AutoHeightImage;
