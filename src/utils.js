import { userTypes } from "./constants"
import i18n from "./i18n"

export const getPathWithParam = (path, param) => {
  var lastOcurrenceOfSlash = path.lastIndexOf("/")
  return path.substring(0, lastOcurrenceOfSlash + 1) + param
}

export const getAvailableUserTypes = (userType) => {
  const availableUserTypes = [userTypes.SIMPLE]
  if (userType >= 2) {
    availableUserTypes.push(userTypes.PRIVILEDGED)
  }

  if (userType >= 3) {
    availableUserTypes.push(userTypes.ADMINISTRATOR)
  }

  return availableUserTypes
}

export const getUserTypeName = (userType) => {
  switch (userType) {
    case 1:
      return i18n.t("Simple")
    case 2:
      return i18n.t("Priviledged")
    case 3:
      return i18n.t("Administrator")
    case 4:
      return i18n.t("Super Administrator")
    default:
      return "Unknown"
  }
}

export const getSimplifiedTags = (tags) => {
  return tags.map((tag) => tag.id)
}
