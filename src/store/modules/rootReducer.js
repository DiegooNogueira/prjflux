import languages from './Language/reducer';
import schools from './School/reducer';
import { combineReducers } from 'redux';


export default combineReducers({
  languages : languages,
  schools : schools
})