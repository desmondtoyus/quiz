import React from 'react';
import PropTypes from 'prop-types';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 'start',
      title: 'Welcome to Quizz',
      text: 'This is a quiz application built using ReactJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.',
      buttonText: 'Start the quiz',
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  componentWillReceiveProps() {
    const { score, total } = this.props;
    this.setState({
      text: `You have completed the quiz. <br /> You got: <strong>${score}</strong> out of <strong>${total}</strong> questions right.`,
    });
  }

  popupHandle = () => {
    const { time } = this.state;
    const { startQuiz } = this.props;
    if (time === 'start') {
      this.setState({
        time: 'end',
        title: 'Congratulations!',
        buttonText: 'Restart',
      });

      startQuiz();
    } else {
      window.location.reload();// restart the application
    }
  }

  createMarkup = text => ({ __html: text })


  render() {
    const { title, text, buttonText } = this.state;

    const { style } = this.props;

    return (
      <div className="popup-container" style={style}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p> {text}</p>
              <button className="fancy-btn" type="button" onClick={this.popupHandle}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
  startQuiz: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

Popup.defaultProps = {
  score: 0,
  total: 0,
  startQuiz: null,
  style: null,
};

export default Popup;
