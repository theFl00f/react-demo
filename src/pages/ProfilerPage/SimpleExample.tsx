import { FC, Fragment, Profiler } from 'react';

const SimpleComponent: FC = () => {
  return <div>Hello, I'm pretty easy to render I think</div>;
};

export const SimpleExample: FC<ExampleProps> = ({ handleRender }) => {
  const id = 'simple';

  return (
    <Fragment>
      <h3>Component being profiled</h3>
      <Profiler id={id} onRender={handleRender}>
        <SimpleComponent />
      </Profiler>
      <h3>OnRender Output</h3>
      <p>Check console for "{id}"!</p>
    </Fragment>
  );
};
