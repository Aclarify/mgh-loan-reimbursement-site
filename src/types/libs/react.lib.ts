import React from 'react';

export interface StandardProps {
  children?: React.ReactNode;
}

export type StandardFC<Props = {}> = React.FC<StandardProps & Props>;
