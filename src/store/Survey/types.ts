

export const STUDENT_SURVEY = 'USER_LOGIN';
export const STUDENT_SURVEY_SUCCESS = 'USER_LOGIN_SUCCESS';
export const STUDENT_SURVEY_ERROR = 'USER_LOGIN_ERROR';




interface StudentSurveyAction {
    type: typeof STUDENT_SURVEY,
    payload: string
}
  
interface StudentSurveySuccessAction {
    type: typeof STUDENT_SURVEY_SUCCESS
    payload: string
}
  
interface StudentSurveyErrorAction {
    type: typeof STUDENT_SURVEY_ERROR
    payload: string
}
  

export type  surveyActionsType = StudentSurveyAction 
| StudentSurveySuccessAction 
| StudentSurveyErrorAction;



