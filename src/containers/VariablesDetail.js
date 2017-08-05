import React, {Component} from 'react';
import variables from '../data/variables';
import FeatureCard from '../containers/FeatureCard';

class VariablesDetail extends Component {
    constructor(props) {
      super(props);
      this.state = { variables }
    }

    render() {
        const features = this.state.variables.map( (obj, index, array) => {
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
              <h2>Variables Detail</h2>
              <div>{ features }</div>
            </div>
        );
    }
}

export default VariablesDetail;
