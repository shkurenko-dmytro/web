import { IQuestionItem } from "../../types/quiz.types"

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

export default Game
