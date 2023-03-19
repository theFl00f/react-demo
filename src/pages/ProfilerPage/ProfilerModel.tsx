import { FC, ProfilerOnRenderCallback } from 'react';
import { ComponentList } from '../../util';
import { RerenderExample } from './RerenderExample';
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

const ProfilerModel: FC = () => {
  return (
    <ComponentList
      title="Profiler"
      components={[
        {
          name: SimpleExample.name,
          element: <SimpleExample handleRender={handleRender} />,
        },
        {
          name: RerenderExample.name,
          element: <RerenderExample handleRender={handleRender} />,
        },
      ]}
    />
  );
};

export default ProfilerModel;
