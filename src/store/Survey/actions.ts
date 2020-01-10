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
import { setResult } from "../Student/actions";
import { registerActionsType } from "../Student/types";

// user registration

export const studentSurvey = (result: string): surveyActionsType => {
  return action(STUDENT_SURVEY, result);
};
export const studentSurveySuccess = (successMsg: string): surveyActionsType =>
  action(STUDENT_SURVEY_SUCCESS, successMsg);
export const studentSurveyError = (errorMsg: string): surveyActionsType =>
  action(STUDENT_SURVEY_ERROR, errorMsg);
export const doSurvey = (result: string) => {
  return (dispatch: Dispatch<registerActionsType>) => {
    console.log("result Dispatched");
    dispatch(setResult(result));
   /* const resultset = appService.studentSurvey(result);
    if (resultset.success) {
      dispatch(studentSurveySuccess("message"));
      history.push("/result");
    } else {
      dispatch(studentSurveyError("sign un unsucceeded"));
    }
  };*/
};
};
