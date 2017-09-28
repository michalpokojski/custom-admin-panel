export const sortByStringAscending = (array, condition)  => array.sort((a, b) => a[condition].localeCompare(b[condition]))
export const sortByStringDescending = (array, condition)  => array.sort((a, b) => b[condition].localeCompare(a[condition]))