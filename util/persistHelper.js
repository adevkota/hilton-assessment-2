export const saveState = (state) => {
	try {
	  const serializedState = JSON.stringify(state);
	  localStorage.setItem('hiltonHotelAssesmentRoomsState', serializedState);
	} catch {
	  // ignore write errors
	}
};

export const loadState = () => {
	try {
	  const serializedState = localStorage.getItem('hiltonHotelAssesmentRoomsState');
	//   console.log(serializedState)
	  if (serializedState === null) {
		 return undefined;
	  }
	  return JSON.parse(serializedState);
	} catch (err) {
	  return undefined;
	}
 }; 