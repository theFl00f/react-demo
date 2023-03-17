import React, { FC, ReactElement } from 'react';
import { UnknownError } from './errors';
import useCodeSource, { CodeSource } from './useCodeSource';

interface Props {
  classCode: ReactElement;
  functionalCode: ReactElement;
}

const CodeSourceSwitcher: FC<Props> = ({ classCode, functionalCode }) => {
  const { codeSource, setCodeSource } = useCodeSource();

  const renderCode = () => {
    switch (codeSource) {
      case CodeSource.Class:
        return classCode;
      case CodeSource.Functional:
        return functionalCode;
      default:
        throw new UnknownError('CodeSource');
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <label htmlFor="code-source">Choose Class or Functional code:</label>
        <select
          name="code-source"
          value={codeSource}
          onChange={(e) => setCodeSource(e.target.value as CodeSource)}
        >
          <option value={CodeSource.Class}>{CodeSource.Class}</option>
          <option value={CodeSource.Functional}>{CodeSource.Functional}</option>
        </select>
      </div>
      {renderCode()}
    </div>
  );
};

export default CodeSourceSwitcher;
