'use strict'
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
async function newfecthapi(apiClass,apiMethod,apiMap) {
  let request = `http://localhost:3000/api?class=${apiClass}&method=${apiMethod}`
  let APIDATE
  let DateObj
  console.log("newfecthapi apiMap", apiMap)
  // apiMap.forEach( (value, key) => {
  //   request +=`&${key}=${value}`
  // });
  // return fetch(request,{
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(DateObj)
  // })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       return result
  //     },
  //     (error) => {
  //       return error
  //     }
  //   )
}
function isEmpty(obj) {
  for (var key in obj) {
    return false
  }
  return true
}
function deepClonObject(lastObj) {
  let newObj = {}
  if (Array.isArray(lastObj))  {
    newObj = []
  }
  for (var key in lastObj) {
    if (typeof(lastObj[key]) === 'object') {
      newObj[key] = deepClonObject(lastObj[key])
    } else {
      newObj[key] = lastObj[key]
    }
  }
  return newObj
}

export { isEmpty, fecthapi, deepClonObject }
