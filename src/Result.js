import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  constructor(props) {
    super(props);

    const { steps } = this.props;
    const { selectedVideos } = this.props;

    // this.setState({ name, gender, age });
    console.log(steps);
    console.log('----');
    console.log(selectedVideos);

    this.state = {
      selectedVideos: selectedVideos,
      steps: steps
    };
  }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, gender, age } = steps;

//     this.setState({ name, gender, age });
//   }

  render() {
    const { selectedVideos } = this.state;
    return (
      <div style={{ width: '100%', color: 'orange' }}>
        <h3>Your selected videos:</h3>
        <table>
          <tbody>
          {selectedVideos.map((vid,i) => (
            <tr key={i}>
              <td>{vid}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Result.propTypes = {
  steps: PropTypes.object,
  selectedVideos: PropTypes.array,
};

Result.defaultProps = {
  steps: undefined,
  selectedVideos: []
};

export default Result;