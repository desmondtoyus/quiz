import React from 'react';
import PropTypes from 'prop-types';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: ['', '', '', ''],
    };
  }

  checkAnswer = (e) => {
    const { isAnswered, showButton } = this.props;

    if (!isAnswered) {
      const elem = e.currentTarget;
      const { correct, increaseScore } = this.props;
      const { classNames } = this.state;
      const answer = Number(elem.dataset.id);
      const updatedClassNames = classNames;

      if (answer === correct) {
        updatedClassNames[answer - 1] = 'right';
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = 'wrong';
      }

      this.setState({
        classNames: updatedClassNames,
      });
      showButton();
    }
  }


  render() {
    const { answers } = this.props;
    const { classNames } = this.state;


    return (
      <div id="answers">
        <ul>
          <li className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
          <li className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
          <li className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
          <li className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
        </ul>
      </div>
    );
  }
}
Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string),
  correct: PropTypes.number,
  isAnswered: PropTypes.bool,
  increaseScore: PropTypes.func,
  showButton: PropTypes.func,
};

Answers.defaultProps = {
  answers: '',
  correct: 0,
  isAnswered: false,
  increaseScore: null,
  showButton: null,
};

export default Answers;
