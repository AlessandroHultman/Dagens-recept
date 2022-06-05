export function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}

export const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `there is no ${selector} class`
  )
}
