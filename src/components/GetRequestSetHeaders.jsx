import React, { Component } from 'react';
import ElapsedTime from './ElapsedTime'

class GetRequestSetHeaders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch('https://api.npms.io/v2/search?q=react', { headers })
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
              <h5 className="card-header">GET Request with Set Headers</h5>
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
}

export { GetRequestSetHeaders }; 
