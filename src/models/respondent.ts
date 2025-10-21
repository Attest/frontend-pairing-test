export type Respondent = Readonly<{
  id: string
  segmentation: RespondentSegmentation
  responses: RespondentResponses
}>

export type RespondentSegmentation = Readonly<{ [demographicId: string]: string }>

export type RespondentResponses = Readonly<{ [questionId: string]: readonly string[] }>
