'use strict'
export async function fecthapi(apiClass,apiMethod,apiMap) {
  let request = `http://localhost:3000/api?class=${apiClass}&method=${apiMethod}`
  let APIDATE
  apiMap.forEach( (value, key) => {
    request +=`&${key}=${value}`
  });

  return fetch(request)
    .then(res => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error
      }
    )
}
