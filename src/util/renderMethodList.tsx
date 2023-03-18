import { startCase } from 'lodash';
import { Fragment } from 'react';

interface Props {
  methods: (() => JSX.Element)[];
  title: string;
}

export default function renderMethodList({
  methods,
  title,
}: Props): JSX.Element {
  return (
    <Fragment>
      <h1>{title}</h1>
      <ul>
        {methods.map((method) => (
          <li key={method.name}>
            <h2>{startCase(method.name)}</h2>
            {method()}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
