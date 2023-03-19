import { ProfilerOnRenderCallback } from 'react';
import { renderMethodList } from '../../util';
import { RerenderExample } from './ReRenderExample';
import { SimpleExample } from './SimpleExample';

const handleRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};

export default function ProfilerModel(): JSX.Element {
  const simpleExample = () => <SimpleExample handleRender={handleRender} />;
  const rerenderExample = () => <RerenderExample handleRender={handleRender} />;

  return renderMethodList({
    methods: [simpleExample, rerenderExample],
    title: 'Profiler',
  });
}
