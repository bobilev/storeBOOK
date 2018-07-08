'use strict'
function isEmpty(obj) {
  // for (var key in obj) {
  //   return false;
  // }
  for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
  return true;
}
async function fecthapi(apiClass,apiMethod,apiMap) {
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
export { isEmpty, fecthapi };
