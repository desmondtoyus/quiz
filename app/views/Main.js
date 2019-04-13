import React from 'react';
import Answers from '../components/Answers';
import Popup from '../components/modals/Popup';
import data from '../data/data';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: 'flex',
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  componentWillMount() {
    const { nr } = this.state;
    this.pushData(nr);
  }

  pushData = (n) => {
    const { nr } = this.state;
    this.setState({
      question: data[n].question,
      answers: [data[n].answers[0], data[n].answers[1], data[n].answers[2], data[n].answers[3]],
      correct: data[n].correct,
      nr: nr + 1,
    });
  }

  nextQuestion = () => {
    const { nr, total } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: 'flex',
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
      });
    }
  }

  handleShowButton = () => {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  }

  handleStartQuiz = () => {
    this.setState({
      displayPopup: 'none',
      nr: 1,
    });
  }

  handleIncreaseScore = () => {
    const { score } = this.state;
    this.setState({
      score: score + 1,
    });
  }

  render() {
    const {
      nr, total, question, answers, correct, showButton, questionAnswered, displayPopup, score,
    } = this.state;

    return (
      <div className="container">

        <Popup style={{ display: displayPopup }} score={score} total={total} startQuiz={this.handleStartQuiz} />

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              <h4>Question {nr}/{total}</h4>
              <p>{question}</p>
            </div>
            <Answers answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore} />
            <div id="submit">
              {showButton ? <button className="fancy-btn" type="button" onClick={this.nextQuestion}>{nr === total ? 'Finish quiz' : 'Next question'}</button> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
