import { useState } from "react"
import "./App.css"

interface IQuestion {
  title: string
  variants: string[]
  correct: number
}

interface IQuestionItem {
  step: number
  question: IQuestion
  questionsLength: number
  onClickVariant: IOnClickVariant
}

interface IResult {
  result: number
  questionsLength: number
}

interface IOnClickVariant {
  (index: number): void
}

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

function Result({ result, questionsLength }: IResult) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {result} ответа из {questionsLength}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

function Game({
  step,
  question,
  onClickVariant,
  questionsLength,
}: IQuestionItem) {
  const progress: number = Math.round((step / questionsLength) * 100)

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  )
}

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
