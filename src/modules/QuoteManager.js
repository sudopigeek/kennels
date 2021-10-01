const remoteURL = "https://type.fit/api/quotes"

export const getAllQuotes = () => {
  return fetch(`${remoteURL}`)
  .then(res => res.json())
}
