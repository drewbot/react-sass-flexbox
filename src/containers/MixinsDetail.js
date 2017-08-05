import React, {Component} from 'react';
import mixins from '../data/mixins';
import FeatureCard from '../containers/FeatureCard';

class MixinsDetail extends Component {
    constructor(props) {
      super(props);
      this.state = { mixins }
    }

    render() {
        const features = this.state.mixins.map( (obj, index, array) => {
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
              <h2>Mixins Detail</h2>
              <div>{ features }</div>
            </div>
        );
    }
}

export default MixinsDetail;
