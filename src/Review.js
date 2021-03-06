import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
  constructor(props) {
    super(props);

    const { steps } = this.props;
    const { name, gender, age, phone, email } = steps;

    // this.setState({ name, gender, age });

    this.state = {
      name: name,
      gender: gender,
      age: age,
      phone: phone,
      email: email
    };
  }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, gender, age } = steps;

//     this.setState({ name, gender, age });
//   }

  render() {
    const { name, gender, age, phone, email } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{phone.value}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;