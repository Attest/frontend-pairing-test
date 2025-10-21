import { Respondent } from 'src/models/respondent'
import { html, render } from '../../dom'
import { Respondents, State } from '../../store'

export function survey(state: State): ReturnType<typeof render> {
  const filteredDemographicRespondents = getRespondentsWithSegmentation(
    state.respondents ?? {},
    state.selectedDemographics,
  )
  return !state.survey
    ? render(html`<div class="survey-container"></div>`)
    : render(
        html`
          <div class="survey-container">
            <h2 class="survey-heading">${state.survey.title}</h2>
            <div class="question-list">
              ${Object.values(state.survey.questions).map(
                question => html`
                  <div class="question">
                    <h3 class="question-heading">${question.title ?? 'Not Defined'}</h3>
                    <div class="answers">
                      ${Object.values(question.answers).map(answer => {
                        const questionAnswerRespondents = getRespondentsForQuestionAnswer(
                          state.respondents ?? {},
                          question.id,
                          answer.id,
                        )
                        const filteredQuestionAnswerRespondents = Object.values(
                          questionAnswerRespondents,
                        ).filter(
                          respondent => filteredDemographicRespondents[respondent.id] !== undefined,
                        )

                        const activeRespondentsPercentage = percentageOf(
                          Object.keys(state.respondents ?? {}).length,
                          filteredQuestionAnswerRespondents.length,
                        )
                        return html` <div
                          class="answer"
                          data-question-id="${question.id}"
                          data-answer-id="${answer.id}"
                          data-selected="${state.selectedQuestionAnswers[question.id]?.includes(
                            answer.id,
                          ) ?? false}"
                        >
                          <div class="track" style="width: ${activeRespondentsPercentage}%"></div>
                          <div
                            class="marker"
                            style="width: ${percentageOf(
                              Object.keys(state.respondents ?? {}).length,
                              Object.keys(questionAnswerRespondents).length,
                            )}%"
                          ></div>

                          <div class="label">${answer.text}</div>

                          <div class="value">${filteredQuestionAnswerRespondents.length}</div>
                          <div class="percentage">
                            (${Math.round(activeRespondentsPercentage)}%)
                          </div>
                        </div>`
                      })}
                    </div>
                  </div>
                `,
              )}
            </div>
          </div>
        `,
        el =>
          el.querySelectorAll('.answer').forEach(elAnswer =>
            elAnswer.addEventListener('click', e => {
              const target = e.currentTarget as HTMLElement
              const { questionId, answerId } = target.dataset

              if (!questionId || !answerId) {
                return
              }
            }),
          ),
      )
}

function getRespondentsWithSegmentation(
  respondents: Respondents,
  segmentation: { [demographicId: string]: string[] },
): Respondents {
  return Object.fromEntries(
    Object.entries(respondents).filter(([_, respondent]) => {
      return isRespondentInSegmentation(respondent, segmentation)
    }),
  )
}

function isRespondentInSegmentation(
  respondent: Respondent,
  segmentation: { [demographicId: string]: string[] },
): boolean {
  return Object.entries(segmentation).every(([id, optionIds]) => {
    if (optionIds.length === 0) {
      return true
    }

    const respondentOptionId = respondent.segmentation[id]
    return respondentOptionId !== undefined ? optionIds.includes(respondentOptionId) : false
  })
}

function getRespondentsForQuestionAnswer(
  respondents: Respondents,
  questionId: string,
  answerId: string,
): Respondents {
  return Object.fromEntries(
    Object.entries(respondents).filter(([_, respondent]) => {
      return hasRespondentSelectedQuestionAnswer(respondent, questionId, answerId)
    }),
  )
}

function hasRespondentSelectedQuestionAnswer(
  respondent: Respondent,
  questionId: string,
  answerId: string,
): boolean {
  return respondent.responses[questionId]?.includes(answerId) ?? false
}

function percentageOf(base: number, value: number): number {
  return base === 0 || value === 0 ? 0 : (100 / base) * value
}
