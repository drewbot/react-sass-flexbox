import React, {Component} from 'react';
import classes from '../data/classes';
import FeatureCard from '../containers/FeatureCard';

class ClassesDetail extends Component {
    constructor(props) {
      super(props);
      this.state = { classes }
    }

    render() {
        const features = this.state.classes.map( (obj, index, array) => {
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
              <h2>Classes Detail</h2>
              <div>{ features }</div>
            </div>
        );
    }
}

export default ClassesDetail;
