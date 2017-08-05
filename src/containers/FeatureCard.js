import React, {Component} from 'react';

class FeatureCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
              <h2>{ this.props.feature.title }</h2>
              <p>{ this.props.feature.text }</p>
              { this.props.children }
            </div>
        );
    }
}

export default FeatureCard
