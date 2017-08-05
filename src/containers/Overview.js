import React, {Component} from 'react';
import features from '../data/features';
import FeatureCard from '../containers/FeatureCard';

class Overview extends Component {
    constructor(props) {
      super(props);
      this.state = { features }
    }

    render() {
        const features = this.state.features.map( (obj, index, array) => {
          return (
            <section>
              <FeatureCard feature={ obj }>
                balls
              </FeatureCard>
            </section>
          )
        })
        return (
            <div>
              <h2>Overview</h2>
              <div>{ features }</div>
            </div>
        );
    }
}

export default Overview;
