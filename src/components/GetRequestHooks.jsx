import React, { useState, useEffect } from 'react';
import ElapsedTime from './ElapsedTime'

function GetRequestHooks() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const fetchData = async () => {
          const response = await fetch('https://api.npms.io/v2/search?q=react')
          const data = await response.json()
          setTotalReactPackages(data.total)
        }
        fetchData()

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
          <h5 className="card-header">GET Request with React Hooks</h5>
          <div className="card-body card-results">
            Total react packages: {totalReactPackages}
            <small>Elapsed time:
              {totalReactPackages &&
              <ElapsedTime start={!totalReactPackages} end={!!totalReactPackages} />
              }
            </small>
          </div>
        </div>
    );
}

export { GetRequestHooks };
