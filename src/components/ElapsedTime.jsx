import React, {useState, useEffect} from 'react';

const ElapsedTime = (
  start,
  end
) => {
  const [performanceStart, setPerformanceStart] = useState(null);
  const [performanceEnd, setPerformanceEnd] = useState(null);

  useEffect(() => {
    if (!!start) {
      setPerformanceStart(performance.now());
    }

    if (!!end) {
      setPerformanceEnd(performance.now());
    }

  }, [start, end]);

  return ( 
    <span>{`${(performanceEnd - performanceStart).toFixed(2)} ms`}</span> 
  )
}

export default ElapsedTime;
