const getStartPayloadOf = (typeBeginning) => {
  return {
    type: typeBeginning + "_START",
    payload: true,
  }
}

const getFailurePayloadOf = (typeBeginning, payload = null) => {
  return {
    type: typeBeginning + "_ERROR",
    payload: payload,
  }
}

const getSuccessPayloadOf = (typeBeginning, payload = null) => {
  return {
    type: typeBeginning + "_SUCCESS",
    payload: payload,
  }
}

const getSetVisibilityOfModalFormPayloadOf = (typeBeginning, payload) => {
  return {
    type: typeBeginning + "_SET_VISIBILITY_OF_MODAL_FORM",
    payload: payload,
  }
}

const getSetVisibilityOfModalFormTypeOf = (typeBeginning) => {
  return typeBeginning + "_SET_VISIBILITY_OF_MODAL_FORM"
}

const getStartTypeOf = (typeBeginning) => {
  return typeBeginning + "_START"
}

const getFailureTypeOf = (typeBeginning) => {
  return typeBeginning + "_ERROR"
}

const getSuccessTypeOf = (typeBeginning) => {
  return typeBeginning + "_SUCCESS"
}

export default {
  getStartPayloadOf,
  getFailurePayloadOf,
  getSuccessPayloadOf,
  getSetVisibilityOfModalFormPayloadOf,
  getStartTypeOf,
  getFailureTypeOf,
  getSuccessTypeOf,
  getSetVisibilityOfModalFormTypeOf,
}
