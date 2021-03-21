export const addActionTypes = obj => {
  for (const property in obj) {
    const origAction = obj[property]

    const newFunction = (args) => {
      const result = origAction(args)
      result.type = property
      return result;
    }

    Object.defineProperty(newFunction, 'name', {value: property, configurable: true});
    obj[property] = newFunction
  }

  return obj
}
