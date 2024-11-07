import { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finalResult, setFinalResult] = useState(false);

  const questions = [
    {
      text: "where are Proxima Indian offices Located ?",
      options: [
        { id: 1, text: "HYDERABAD,BANGALORE,PUNE", isTrue: true },
        { id: 2, text: "HYDERABAD,PUNE,KOLKATA", isTrue: false },
        { id: 3, text: "HYDERABAD,BANGALORE,CHENNAI", isTrue: false },
        { id: 4, text: "BANGALORE,CHENNAI,PUNE", isTrue: false }
      ]
    },

    {
      text: "Who is the CEO of Proxima ?",
      options: [
        { id: 1, text: "Kishore", isTrue: false },
        { id: 2, text: "Angela", isTrue: false },
        { id: 3, text: "Sriji", isTrue: false },
        { id: 4, text: "Sai", isTrue: true }
      ]
    },

    {
      text: "what is size of Proxima ?",
      options: [
        { id: 1, text: "150-200", isTrue: false },
        { id: 2, text: "200-300", isTrue: true },
        { id: 3, text: "50-100", isTrue: false },
        { id: 4, text: "100-150", isTrue: false }
      ]
    },

    {
      text: "when is Proxima started ?",
      options: [
        { id: 1, text: "2019", isTrue: true },
        { id: 2, text: "2009", isTrue: false },
        { id: 3, text: "2000", isTrue: false },
        { id: 4, text: "2015", isTrue: false }
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
