import { FC, ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const PatternLayout: FC<Props> = ({ children }) => (
  <div>
    <a href="/">&#11013; Back</a>
    {children}
  </div>
);

export default PatternLayout;
