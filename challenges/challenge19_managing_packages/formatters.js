
// import date-fns package
import {format} from 'date-fns'

// function that returns date in the format dd/mm/yyyy
function formatDate (date) {
	return format(date, 'dd/MM/yyyy');
}

//export the function formatDate to use in index.js
export {formatDate};

