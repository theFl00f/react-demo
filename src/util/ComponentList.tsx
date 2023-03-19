import { startCase } from 'lodash';
import { FC, Fragment } from 'react';

export interface ComponentProps {
  element: JSX.Element;
  name: string;
}

interface Props {
  components: ComponentProps[];
  title: string;
}

const ComponentList: FC<Props> = ({ components, title }) => (
  <Fragment>
    <h1>{title}</h1>
    <ul>
      {components.map(({ element, name }) => {
        return (
          <li key={name}>
            <h2>{startCase(name)}</h2>
            {element}
          </li>
        );
      })}
    </ul>
  </Fragment>
);

export default ComponentList;
