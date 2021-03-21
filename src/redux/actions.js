import { addActionTypes } from "./utils/action-utils"

export default addActionTypes({
  init: () => ({}),
  onClick: event => ({
    event: event
  })
})

