import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export default function PatternLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <a href="/">&#11013; Back</a>
      {children}
    </div>
  );
}
