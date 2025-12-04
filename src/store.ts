import { Demographic } from './models/demographic'
import { Respondent } from './models/respondent'
import { Survey } from './models/survey'

export type Demographics = Readonly<{ [demographicId: string]: Demographic }>
export type Respondents = Readonly<{ [respondentId: string]: Respondent }>

export type State = APIState & UIState

type APIState = {
  survey?: Survey
  demographics?: Demographics
  respondents?: Respondents
}

export type SelectedDemographics = { [demographicId: string]: string[] }

type UIState = {
  selectedDemographics: SelectedDemographics
}

type Subscriber = (state: State) => void

const state: State = {
  selectedDemographics: {},
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
