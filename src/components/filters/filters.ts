import { html, render } from '../../dom'
import { patchState, State } from '../../store'

export function filters(state: State): ReturnType<typeof render> {
  const counts = sumDemographics(state.respondents)
  return !state.demographics
    ? render(html`<div class="filters-container"></div>`)
    : render(
        html`<div class="filters-container">
          <h2 class="filters-heading">Filters</h2>
          <div class="demographics">
            ${Object.values(state.demographics).map(
              demographic =>
                html` <h3 class="demographics-heading">${demographic.display}</h3>
                  <div class="options">
                    ${Object.values(demographic.options).map(
                      option =>
                        html`<div
                          class="option js-option"
                          data-selected="${state.selectedDemographics[demographic.id]?.includes(
                            option.id,
                          )}"
                          data-demographic-id="${demographic.id}"
                          data-option-id="${option.id}"
                        >
                          <div class="label">${option.display}</div>
                          <div class="count">${counts[demographic.id]?.[option.id]}</div>
                          <div class="percentage">
                            (${Math.round(
                              percentageOf(
                                Object.keys(state.respondents ?? {}).length,
                                counts[demographic.id]?.[option.id] ?? 0,
                              ),
                            )}%)
                          </div>
                        </div>`,
                    )}
                  </div>`,
            )}
          </div>
        </div>`,
        el =>
          el.querySelectorAll('.js-option').forEach(elOption =>
            elOption.addEventListener('click', e => {
              const target = e.currentTarget as HTMLElement
              const { demographicId, optionId } = target.dataset
              if (!demographicId || !optionId) {
                return
              }

              toggleSelectedDemographicOption(state.selectedDemographics, demographicId, optionId)
            }),
          ),
      )
}

function toggleSelectedDemographicOption(
  selectedDemographics: State['selectedDemographics'],
  demographicId: string,
  optionId: string,
): void {
  const selectedDemographic = selectedDemographics[demographicId] ?? []
  const newSelectedDemographicOptions = selectedDemographic.includes(optionId)
    ? selectedDemographic.filter(id => id !== optionId)
    : [...selectedDemographic, optionId]

  patchState({
    selectedDemographics: {
      ...selectedDemographics,
      [demographicId]: newSelectedDemographicOptions,
    },
  })
}

function sumDemographics(respondents: State['respondents']): {
  [demographicId: string]: { [optionId: string]: number }
} {
  if (!respondents) {
    return {}
  }
  const counts: { [demographicId: string]: { [optionId: string]: number } } = {}
  Object.values(respondents).map(respondent => {
    Object.entries(respondent.segmentation).map(([key, value]) => {
      if (counts[key] === undefined) {
        counts[key] = {}
      }

      if (!counts[key][value]) {
        counts[key][value] = 0
      }

      counts[key][value] += 1
    })
  })

  return counts
}

function percentageOf(base: number, value: number): number {
  return base === 0 || value === 0 ? 0 : (100 / base) * value
}
