import { combineReducers } from "redux";

import devices from "./redux/devices/reducer";
import ui from "./redux/ui/reducer";

const rootReducer = combineReducers({
  devices,
  ui
});

export default rootReducer;
