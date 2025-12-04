import { subscribe, patchState, State } from './store'
import { survey } from './components/survey'
import { sidebar } from './components/sidebar'
import './styles/main.css'

function renderSurvey(state: State) {
  if (!state.survey) return
  survey(state)(document.querySelector('.js-survey'))
}

function renderSidebar(state: State) {
  sidebar(state)(document.querySelector('.js-sidebar'))
}

;(async function main() {
  subscribe(state => {
    renderSurvey(state)
    renderSidebar(state)
  })

  patchState({ survey: await (await fetch('/api/survey.json')).json() })
  patchState({
    demographics: await (await fetch('/api/demographics.json')).json(),
  })
  patchState({
    respondents: await (await fetch('/api/respondents.json')).json(),
  })
})()
