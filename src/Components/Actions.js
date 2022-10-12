import data from '../Data/data.json';

export const SearchOperation = (input) => {

   const foundElement = data.filter((element) => {
      if(
        element.street_name.toLowerCase() === input.toLowerCase() 
        || 
        element.suburb.toLowerCase()   === input.toLowerCase() 
      )
      return element;
   })
   
   return foundElement;
}

export const FilterOperation = (yearFrom, yearUntil, type) => {

  const foundElement = data.filter((element) => {
     const elementYear = parseInt(element.construction_year);
     if(yearFrom && !yearUntil && !type && (elementYear > yearFrom)) {
      return element
     } 
     else if(yearUntil && !yearFrom && !type && (elementYear < yearUntil)){
      return element
     }
     else if(type && !yearFrom && !yearUntil && (element.list_type === type)){
      return element
     }
     else if(yearUntil && yearFrom && !type && (elementYear <= yearUntil  && elementYear >= yearFrom)){
      return element
     }
     else if(yearUntil && yearFrom && type && ((elementYear <= yearUntil  && elementYear >= yearFrom) && element.list_type === type)){
      return element
     }
  })

  return foundElement;
}


