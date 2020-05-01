import React, { Component } from 'react';
import ElapsedTime from './ElapsedTime'

class GetRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
              <h5 className="card-header">Simple GET Request</h5>
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

export { GetRequest }; 
