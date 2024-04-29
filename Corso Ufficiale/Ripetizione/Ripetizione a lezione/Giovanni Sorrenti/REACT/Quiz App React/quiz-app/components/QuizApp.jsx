// import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import "./css/QuizApp.css";

function QuizApp() {
  /* ! Answer database */
  const answer = ["tigre", "cane", "gatto"];

  function handleAnswer(e) {
    e.preventDefault();
    let score = 0;
    let value = [...e.target.elements]
      .filter((element) => element.checked)
      .map((element) => element.value);

    let isCorrect = true;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] !== value[i]) {
        isCorrect = false;
      } else {
        score++;
      }
    }

    if (isCorrect) {
      alert(`Tutte le risposte sono corrette! il tuo punteggio è ${score}`);
    } else {
      alert(
        `Alcune risposte sono sbagliate. Si prega di riprovare, punteggio ${score}`
      );
    }
  }

  return (
    <form onSubmit={handleAnswer}>
      <h1>Quiz App</h1>
      <div className="question first-question">
        <h4>Quale animale è carnivoro?</h4>
        <Answer
          label={"tigre"}
          name={"question-1"}
          inputValue={"tigre"}
          animal="Tigre"
        />
        <Answer
          label={"tartaruga"}
          name={"question-1"}
          inputValue={"tartaruga"}
          animal="Tartaruga"
        />
        <Answer
          label={"giraffa"}
          name={"question-1"}
          inputValue={"giraffa"}
          animal="Giraffa"
        />
        <Answer
          label={"elefante"}
          name={"question-1"}
          inputValue={"elefante"}
          animal="Elefante"
        />
      </div>
      <div className="question first-question">
        <h4>Quale animale è domestico?</h4>
        <Answer
          label={"cane"}
          name={"question-2"}
          inputValue={"cane"}
          animal="Cane"
        />
        <Answer
          label={"leone"}
          name={"question-2"}
          inputValue={"leone"}
          animal="Leone"
        />
        <Answer
          label={"giraffa"}
          name={"question-2"}
          inputValue={"giraffa"}
          animal="Giraffa"
        />
        <Answer
          label={"elefante"}
          name={"question-2"}
          inputValue={"elefante"}
          animal="Elefante"
        />
      </div>
      <div className="question first-question">
        <h4>Quale animale fa le fusa?</h4>
        <Answer
          label={"gatto"}
          name={"question-3"}
          inputValue={"gatto"}
          animal="Gatto"
        />
        <Answer
          label={"tartaruga"}
          name={"question-3"}
          inputValue={"tartaruga"}
          animal="Tartaruga"
        />
        <Answer
          label={"giraffa"}
          name={"question-3"}
          inputValue={"giraffa"}
          animal="Giraffa"
        />
        <Answer
          label={"elefante"}
          name={"question-3"}
          inputValue={"elefante"}
          animal="Elefante"
        />
      </div>
      <div className="footer-quiz">
        <button className="button">Let`s go →</button>
        <button id="reset" type="reset">
          <span className="button-reset-ctrl"></span>
          <span>+</span>
          <span className="button-reset-z"></span>
        </button>
      </div>
    </form>
  );
}

export default QuizApp;
