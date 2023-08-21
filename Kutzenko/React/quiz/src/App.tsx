import { useState } from "react"
import "./App.css"
import {IQuestion,IOnClickVariant} from "./types/quiz.types"
import Game from "./components/game/Game"
import Result from "./components/result/Result"

const questions: IQuestion[] = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
]

function App() {
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(0)

  const question = questions[step]

  const onClickVariant: IOnClickVariant = (index) => {
    setStep(step + 1)

    if (question.correct === index) {
      setResult(result + 1)
    }
  }

  return (
    <div className="app">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          questionsLength={questions.length}
        />
      ) : (
        <Result result={result} questionsLength={questions.length} />
      )}
    </div>
  )
}

export default App
