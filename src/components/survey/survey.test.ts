import { survey } from './survey'
import { describe, it, expect } from 'vitest'
import mockSurvey from '../../../public/api/survey.json'
import mockDemographics from '../../../public/api/demographics.json'
import mockRespondents from '../../../public/api/respondents.json'

describe('survey component', () => {
  it('should not render if no survey', () => {
    survey({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: {},
      selectedQuestionAnswers: {},
    })(document.body)
    expect(document.body.querySelector('.survey')).toBe(null)
  })

  it('should render survey', () => {
    survey({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: {},
      selectedQuestionAnswers: {},
    })(document.body)
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
      "
                <div class="survey-container">
                  <h2 class="survey-heading">Talking about brands</h2>
                  <div class="question-list">
                    
                        <div class="question">
                          <h3 class="question-heading">Which of these social platforms do you use?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-1" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 70.40816326530613%"></div>
                                <div class="marker" style="width: 70.40816326530613%"></div>

                                <div class="label">Facebook</div>

                                <div class="value">69</div>
                                <div class="percentage">
                                  (70%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 67.34693877551021%"></div>
                                <div class="marker" style="width: 67.34693877551021%"></div>

                                <div class="label">YouTube</div>

                                <div class="value">66</div>
                                <div class="percentage">
                                  (67%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 48.9795918367347%"></div>
                                <div class="marker" style="width: 48.9795918367347%"></div>

                                <div class="label">Instagram</div>

                                <div class="value">48</div>
                                <div class="percentage">
                                  (49%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 42.85714285714286%"></div>
                                <div class="marker" style="width: 42.85714285714286%"></div>

                                <div class="label">Twitter</div>

                                <div class="value">42</div>
                                <div class="percentage">
                                  (43%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 46.93877551020408%"></div>
                                <div class="marker" style="width: 46.93877551020408%"></div>

                                <div class="label">Snapchat</div>

                                <div class="value">46</div>
                                <div class="percentage">
                                  (47%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 39.79591836734694%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Linkedin</div>

                                <div class="value">39</div>
                                <div class="percentage">
                                  (40%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="7" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">Other</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="8" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">None</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">How often do you shop online?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-2" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 5.1020408163265305%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Daily</div>

                                <div class="value">5</div>
                                <div class="percentage">
                                  (5%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 15.306122448979592%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Weekly</div>

                                <div class="value">15</div>
                                <div class="percentage">
                                  (15%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 39.79591836734694%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Monthly</div>

                                <div class="value">39</div>
                                <div class="percentage">
                                  (40%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 25.510204081632654%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Rarely</div>

                                <div class="value">25</div>
                                <div class="percentage">
                                  (26%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 14.285714285714286%"></div>
                                <div class="marker" style="width: 14.285714285714286%"></div>

                                <div class="label">Never</div>

                                <div class="value">14</div>
                                <div class="percentage">
                                  (14%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">What is your preferred method of communication?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-3" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 29.591836734693878%"></div>
                                <div class="marker" style="width: 29.591836734693878%"></div>

                                <div class="label">Email</div>

                                <div class="value">29</div>
                                <div class="percentage">
                                  (30%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 25.510204081632654%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Text/SMS</div>

                                <div class="value">25</div>
                                <div class="percentage">
                                  (26%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 15.306122448979592%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Phone calls</div>

                                <div class="value">15</div>
                                <div class="percentage">
                                  (15%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 5.1020408163265305%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Video calls</div>

                                <div class="value">5</div>
                                <div class="percentage">
                                  (5%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 15.306122448979592%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Social media messaging</div>

                                <div class="value">15</div>
                                <div class="percentage">
                                  (15%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 9.183673469387756%"></div>
                                <div class="marker" style="width: 9.183673469387756%"></div>

                                <div class="label">Face-to-face</div>

                                <div class="value">9</div>
                                <div class="percentage">
                                  (9%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                  </div>
                </div>
              "
    `)
  })

  it('should render survey with active filters', () => {
    survey({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: { gender: ['female'] },
      selectedQuestionAnswers: {},
    })(document.body)
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
      "
                <div class="survey-container">
                  <h2 class="survey-heading">Talking about brands</h2>
                  <div class="question-list">
                    
                        <div class="question">
                          <h3 class="question-heading">Which of these social platforms do you use?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-1" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 30.612244897959183%"></div>
                                <div class="marker" style="width: 70.40816326530613%"></div>

                                <div class="label">Facebook</div>

                                <div class="value">30</div>
                                <div class="percentage">
                                  (31%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 33.673469387755105%"></div>
                                <div class="marker" style="width: 67.34693877551021%"></div>

                                <div class="label">YouTube</div>

                                <div class="value">33</div>
                                <div class="percentage">
                                  (34%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 16.3265306122449%"></div>
                                <div class="marker" style="width: 48.9795918367347%"></div>

                                <div class="label">Instagram</div>

                                <div class="value">16</div>
                                <div class="percentage">
                                  (16%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 20.408163265306122%"></div>
                                <div class="marker" style="width: 42.85714285714286%"></div>

                                <div class="label">Twitter</div>

                                <div class="value">20</div>
                                <div class="percentage">
                                  (20%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 20.408163265306122%"></div>
                                <div class="marker" style="width: 46.93877551020408%"></div>

                                <div class="label">Snapchat</div>

                                <div class="value">20</div>
                                <div class="percentage">
                                  (20%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 17.346938775510203%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Linkedin</div>

                                <div class="value">17</div>
                                <div class="percentage">
                                  (17%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="7" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">Other</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="8" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">None</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">How often do you shop online?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-2" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 3.0612244897959187%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Daily</div>

                                <div class="value">3</div>
                                <div class="percentage">
                                  (3%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 6.122448979591837%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Weekly</div>

                                <div class="value">6</div>
                                <div class="percentage">
                                  (6%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 16.3265306122449%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Monthly</div>

                                <div class="value">16</div>
                                <div class="percentage">
                                  (16%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 14.285714285714286%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Rarely</div>

                                <div class="value">14</div>
                                <div class="percentage">
                                  (14%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 7.142857142857143%"></div>
                                <div class="marker" style="width: 14.285714285714286%"></div>

                                <div class="label">Never</div>

                                <div class="value">7</div>
                                <div class="percentage">
                                  (7%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">What is your preferred method of communication?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-3" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 13.26530612244898%"></div>
                                <div class="marker" style="width: 29.591836734693878%"></div>

                                <div class="label">Email</div>

                                <div class="value">13</div>
                                <div class="percentage">
                                  (13%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 11.224489795918368%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Text/SMS</div>

                                <div class="value">11</div>
                                <div class="percentage">
                                  (11%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 11.224489795918368%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Phone calls</div>

                                <div class="value">11</div>
                                <div class="percentage">
                                  (11%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 2.0408163265306123%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Video calls</div>

                                <div class="value">2</div>
                                <div class="percentage">
                                  (2%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 4.081632653061225%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Social media messaging</div>

                                <div class="value">4</div>
                                <div class="percentage">
                                  (4%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 5.1020408163265305%"></div>
                                <div class="marker" style="width: 9.183673469387756%"></div>

                                <div class="label">Face-to-face</div>

                                <div class="value">5</div>
                                <div class="percentage">
                                  (5%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                  </div>
                </div>
              "
    `)
  })

  it('should render survey with active filters and selected answers', () => {
    survey({
      survey: mockSurvey,
      demographics: mockDemographics,
      respondents: mockRespondents,
      selectedDemographics: { gender: ['female'] },
      selectedQuestionAnswers: { 'question-1': ['1', '2'], 'question-2': ['3'] },
    })(document.body)
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
      "
                <div class="survey-container">
                  <h2 class="survey-heading">Talking about brands</h2>
                  <div class="question-list">
                    
                        <div class="question">
                          <h3 class="question-heading">Which of these social platforms do you use?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-1" data-answer-id="1" data-selected="true">
                                <div class="track" style="width: 14.285714285714286%"></div>
                                <div class="marker" style="width: 70.40816326530613%"></div>

                                <div class="label">Facebook</div>

                                <div class="value">14</div>
                                <div class="percentage">
                                  (14%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="2" data-selected="true">
                                <div class="track" style="width: 14.285714285714286%"></div>
                                <div class="marker" style="width: 67.34693877551021%"></div>

                                <div class="label">YouTube</div>

                                <div class="value">14</div>
                                <div class="percentage">
                                  (14%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 1.0204081632653061%"></div>
                                <div class="marker" style="width: 48.9795918367347%"></div>

                                <div class="label">Instagram</div>

                                <div class="value">1</div>
                                <div class="percentage">
                                  (1%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 5.1020408163265305%"></div>
                                <div class="marker" style="width: 42.85714285714286%"></div>

                                <div class="label">Twitter</div>

                                <div class="value">5</div>
                                <div class="percentage">
                                  (5%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 5.1020408163265305%"></div>
                                <div class="marker" style="width: 46.93877551020408%"></div>

                                <div class="label">Snapchat</div>

                                <div class="value">5</div>
                                <div class="percentage">
                                  (5%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 4.081632653061225%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Linkedin</div>

                                <div class="value">4</div>
                                <div class="percentage">
                                  (4%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="7" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">Other</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-1" data-answer-id="8" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 0%"></div>

                                <div class="label">None</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">How often do you shop online?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-2" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Daily</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Weekly</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="3" data-selected="true">
                                <div class="track" style="width: 16.3265306122449%"></div>
                                <div class="marker" style="width: 39.79591836734694%"></div>

                                <div class="label">Monthly</div>

                                <div class="value">16</div>
                                <div class="percentage">
                                  (16%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Rarely</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div> <div class="answer" data-question-id="question-2" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 0%"></div>
                                <div class="marker" style="width: 14.285714285714286%"></div>

                                <div class="label">Never</div>

                                <div class="value">0</div>
                                <div class="percentage">
                                  (0%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                        <div class="question">
                          <h3 class="question-heading">What is your preferred method of communication?</h3>
                          <div class="answers">
                             <div class="answer" data-question-id="question-3" data-answer-id="1" data-selected="false">
                                <div class="track" style="width: 1.0204081632653061%"></div>
                                <div class="marker" style="width: 29.591836734693878%"></div>

                                <div class="label">Email</div>

                                <div class="value">1</div>
                                <div class="percentage">
                                  (1%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="2" data-selected="false">
                                <div class="track" style="width: 7.142857142857143%"></div>
                                <div class="marker" style="width: 25.510204081632654%"></div>

                                <div class="label">Text/SMS</div>

                                <div class="value">7</div>
                                <div class="percentage">
                                  (7%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="3" data-selected="false">
                                <div class="track" style="width: 3.0612244897959187%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Phone calls</div>

                                <div class="value">3</div>
                                <div class="percentage">
                                  (3%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="4" data-selected="false">
                                <div class="track" style="width: 1.0204081632653061%"></div>
                                <div class="marker" style="width: 5.1020408163265305%"></div>

                                <div class="label">Video calls</div>

                                <div class="value">1</div>
                                <div class="percentage">
                                  (1%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="5" data-selected="false">
                                <div class="track" style="width: 1.0204081632653061%"></div>
                                <div class="marker" style="width: 15.306122448979592%"></div>

                                <div class="label">Social media messaging</div>

                                <div class="value">1</div>
                                <div class="percentage">
                                  (1%)
                                </div>
                              </div> <div class="answer" data-question-id="question-3" data-answer-id="6" data-selected="false">
                                <div class="track" style="width: 3.0612244897959187%"></div>
                                <div class="marker" style="width: 9.183673469387756%"></div>

                                <div class="label">Face-to-face</div>

                                <div class="value">3</div>
                                <div class="percentage">
                                  (3%)
                                </div>
                              </div>
                          </div>
                        </div>
                      
                  </div>
                </div>
              "
    `)
  })
})
