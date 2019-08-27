import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderRightIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const BorderRightIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: BorderRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path stroke={color} d="M2.5 2.5h10v10h-10z" />
        <path fill={color} d="M11 3h1v9h-1z" />
      </svg>
    );
  }

  console.error(`BorderRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderRightIcon;
