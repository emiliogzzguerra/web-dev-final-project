import { alertTypes } from "../types"

// Muestra alerta
export function showAlert(alerta) {
  return (dispatch) => {
    dispatch(createAlert(alerta))
  }
}

const createAlert = (alerta) => ({
  type: alertTypes.SHOW_ALERT,
  payload: alerta,
})

// ocultar alerta
export function ocultarAlertaAction() {
  return (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: alertTypes.HIDE_ALERT,
})
