export type Survey = Readonly<{
  title: string
  questions: Readonly<{
    [questionId: string]: SurveyQuestion
  }>
}>

export type SurveyQuestion = Readonly<{
  id: string
  title: string
  type: string
  answers: Readonly<{
    [answerId: string]: SurveyQuestionAnswer
  }>
}>

export type SurveyQuestionAnswer = Readonly<{
  id: string
  text: string
}>
