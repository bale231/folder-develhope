import { Answers } from "./Answers";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export function QuizApp() {
  const [answers, setAnswers] = useState([]);

  function onClick(e) {
    const checked = e.target.checked;
    const targetValue = e.target.value;
    if (checked) {
      setAnswers(targetValue);
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(answers);
  }

  useEffect(() => {
    // console.log(answers);
  }, [answers]);

  return (
    <>
      <form onSubmit={handleSubmit} className="quiz-app card">
        <h1>Quiz App</h1>
        <h4>Quale animale è carnivoro?</h4>
        <div>
          <label htmlFor="Tigre">
            <input
              onClick={onClick}
              type="radio"
              name="answer-1"
              value="Tigre1"
            />
            <span>Tigre</span>
          </label>
          <label htmlFor="Tigre">
            <input
              onClick={onClick}
              type="radio"
              name="answer-1"
              value="Tigr2e"
            />
            <span>Tigre</span>
          </label>
          <label htmlFor="Tigre">
            <input
              onClick={onClick}
              type="radio"
              name="answer-1"
              value="Tigre2"
            />
            <span>Tigre</span>
          </label>
        </div>
        <button type="submit">Invia</button>
      </form>
      <Footer nameApp={"Quiz App"} />
    </>
  );
}
