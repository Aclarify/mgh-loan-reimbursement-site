import clsx from 'clsx';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { StandardFC } from '../../../types/libs/react.lib';

interface LogoProps {
  gatsbyImageData: IGatsbyImageData;
  options?: Record<string, any>;
}

const Logo: StandardFC<LogoProps> = ({ gatsbyImageData, options }) => (
  <GatsbyImage
    image={gatsbyImageData}
    alt="Logo"
    className={clsx('h-full', 'w-auto')}
    {...{ objectFit: 'contain', ...options }}
  />
);

export default Logo;
