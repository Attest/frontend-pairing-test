import { filters } from './filters'
import { describe, it, expect } from 'vitest'
import mockSurvey from '../../../public/api/survey.json'
import mockDemographics from '../../../public/api/demographics.json'
import mockRespondents from '../../../public/api/respondents.json'
import { getState } from '../../store'

describe('option component', () => {
  it('should render filters', () => {
    filters({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: {},
      selectedQuestionAnswers: {},
    })(document.body)
    expect(document.body.querySelectorAll('.option')).toHaveLength(13)
  })

  it('should set filters on click of option', async () => {
    const state = getState()
    filters({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: {},
      selectedQuestionAnswers: {},
    })(document.body)
    const elOption = document.body.querySelector<HTMLElement>('.option')
    elOption?.dispatchEvent(new MouseEvent('click'))
    expect(state.selectedDemographics).toStrictEqual({ gender: ['male'] })
  })
})
