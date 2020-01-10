import { action } from "typesafe-actions";
import {
  STUDENT_SURVEY,
  STUDENT_SURVEY_SUCCESS,
  STUDENT_SURVEY_ERROR,
  surveyActionsType
} from "./types";
import { history } from "../../utilities/history";
import { Dispatch } from "redux";
import { appService } from "../../Services/app.service";
// user registration

export const studentSurvey = (result: string): surveyActionsType => {
  return action(STUDENT_SURVEY, result);
};
export const studentSurveySuccess = (successMsg: string): surveyActionsType =>
  action(STUDENT_SURVEY_SUCCESS, successMsg);
export const studentSurveyError = (errorMsg: string): surveyActionsType =>
  action(STUDENT_SURVEY_ERROR, errorMsg);
export const register = (result: string) => {
  return (dispatch: Dispatch<surveyActionsType>) => {
    console.log("login Dispatched");
    dispatch(studentSurvey(result));
    const resultset = appService.studentSurvey(result);
    if (resultset.success) {
      dispatch(studentSurveySuccess("message"));
      history.push("/result");
    } else {
      dispatch(studentSurveyError("sign un unsucceeded"));
    }
  };
};
