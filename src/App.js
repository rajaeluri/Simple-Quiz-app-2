import { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finalResult, setFinalResult] = useState(false);

  const questions = [
    {
      text: "what is capital city of America ?",
      options: [
        { id: 1, text: "washington DC", isTrue: true },
        { id: 2, text: "jaman", isTrue: false },
        { id: 3, text: "Dubai", isTrue: false },
        { id: 4, text: "Nairobi", isTrue: false }
      ]
    },

    {
      text: "what is capital city of Uganda ?",
      options: [
        { id: 1, text: "Nairobi", isTrue: false },
        { id: 2, text: "jaman", isTrue: false },
        { id: 3, text: "Dubai", isTrue: false },
        { id: 4, text: "Kampala", isTrue: true }
      ]
    },

    {
      text: "what is capital city of Kenya ?",
      options: [
        { id: 1, text: "washington DC", isTrue: false },
        { id: 2, text: "Nairobi", isTrue: true },
        { id: 3, text: "Dubai", isTrue: false },
        { id: 4, text: "texus", isTrue: false }
      ]
    },

    {
      text: "what is capital city of China ?",
      options: [
        { id: 1, text: "Beijing", isTrue: true },
        { id: 2, text: "jamaica", isTrue: false },
        { id: 3, text: "Dubai", isTrue: false },
        { id: 4, text: "has no", isTrue: false }
      ]
    }
  ];

  const optionClicked = (isTrue) => {
    if (isTrue) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResult(true);
    }
  }

  const restart = () => {
    setFinalResult(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <div className="App">
      <h1>React Quiz App</h1>

      {finalResult ? (
        <div className='final-result'>
          <h2>FinalResult</h2>
          <h1>You got {score} out of {questions.length} <hr /> ({(score / questions.length) * 100} %) </h1>
          <button onClick={restart} className='restart-btn'> Restart game </button>
        </div>
      ) : (
        <div className='quiz-container'>
          <h4> question {currentQuestion} out of {questions.length} </h4>
          <h2>{questions[currentQuestion].text}</h2>

          <ul>
            {questions[currentQuestion].options.map((option) =>
              <li onClick={() => optionClicked(option.isTrue)}> {option.text} </li>)}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;
