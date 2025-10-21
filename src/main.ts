import { subscribe, patchState, State } from './store'
import { survey } from './components/survey'
import { filters } from './components/filters'
import './styles/main.css'

function renderSurvey(state: State) {
  if (!state.survey) return
  survey(state)(document.querySelector('.js-survey'))
}

function renderFilters(state: State) {
  filters(state)(document.querySelector('.js-filters'))
}

;(async function main() {
  subscribe(state => {
    renderSurvey(state)
    renderFilters(state)
  })

  patchState({ survey: await (await fetch('/api/survey.json')).json() })
  patchState({
    demographics: await (await fetch('/api/demographics.json')).json(),
  })
  patchState({
    respondents: await (await fetch('/api/respondents.json')).json(),
  })
})()
