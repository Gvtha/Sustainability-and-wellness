import vitalActionTypes from "./vitals.types";

export const setVitalData = (data = {
  type: vitalActionTypes.SET_VITALS,
  payload: data,
});
