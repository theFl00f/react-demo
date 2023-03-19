import { FC, Fragment, Profiler, useEffect, useState } from 'react';

interface RerenderingComponentProps {
  text: string;
}

const RerenderingComponent: FC<RerenderingComponentProps> = ({ text }) => {
  return <div>{text}</div>;
};

export const RerenderExample: FC<ExampleProps> = ({ handleRender }) => {
  const [text, setText] = useState('I am the first render');
  const id = 'rerender';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText('I am the second render!');
    }, 1000);
    () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <h3>Component being profiled</h3>
      <Profiler id={id} onRender={handleRender}>
        <RerenderingComponent text={text} />
      </Profiler>
      <h3>OnRender Output</h3>
      <p>Check console for "{id}"!</p>
    </Fragment>
  );
};
