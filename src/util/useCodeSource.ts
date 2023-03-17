import { useEffect, useState } from 'react';

export enum CodeSource {
  Class = 'Class',
  Functional = 'Functional',
}

const useCodeSource = () => {
  const [codeSource, setCodeSource] = useState<CodeSource>(() => {
    const source = sessionStorage.getItem('codeSource');
    return source ? (JSON.parse(source) as CodeSource) : CodeSource.Functional;
  });

  useEffect(() => {
    sessionStorage.setItem('codeSource', JSON.stringify(codeSource));
  }, [codeSource]);

  return { codeSource, setCodeSource };
};

export default useCodeSource;
