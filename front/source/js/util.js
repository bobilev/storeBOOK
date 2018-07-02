'use strict'
export function isEmpty(obj) {
  // for (var key in obj) {
  //   return false;
  // }
  for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
  return true;
}
