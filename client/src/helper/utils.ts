export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay || 1000))

export const setLocalStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const getLocalStorage = (name) => {
  if (!name) return
  const content = window.localStorage.getItem(name)
  try {
    return JSON.parse(content)
  } catch (error) {
    return content
  }
}

export const removeLocalStorage = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}