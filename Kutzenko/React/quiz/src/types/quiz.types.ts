export interface IQuestion {
  title: string
  variants: string[]
  correct: number
}

export interface IQuestionItem {
  step: number
  question: IQuestion
  questionsLength: number
  onClickVariant: IOnClickVariant
}

export interface IResult {
  result: number
  questionsLength: number
}

export interface IOnClickVariant {
  (index: number): void
}