import { Demographic } from './models/demographic'
import { Respondent } from './models/respondent'
import { Survey } from './models/survey'

export type Demographics = Readonly<{ [demographicId: string]: Demographic }>
export type Respondents = Readonly<{ [respondentId: string]: Respondent }>
export type SelectedDemographics = Readonly<{ [demographicId: string]: string[] }>
export type SelectedQuestionAnswers = Readonly<{ [questionId: string]: string[] }>

export interface State {
  survey?: Survey
  demographics?: Demographics
  respondents?: Respondents

  selectedDemographics: SelectedDemographics
  selectedQuestionAnswers: SelectedQuestionAnswers
}

type Subscriber = (state: State) => void

const state: State = {
  selectedDemographics: {},
  selectedQuestionAnswers: {},
}

const subscribers: Subscriber[] = []

export function patchState(obj: Partial<State>) {
  Object.assign(state, obj)
  notifySubscribers()
}

export function subscribe(fn: Subscriber) {
  subscribers.push(fn)
}

function notifySubscribers() {
  subscribers.forEach(fn => fn(state))
}

export function getState() {
  return state
}
