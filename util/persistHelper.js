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
	  if (serializedState === null) {
			return undefined;
	  }
		let retVal =  JSON.parse(serializedState);
		retVal.rooms = retVal.rooms.map(room => {
			room.numOfAdults = +room.numOfAdults;
			room.numOfChildren = +room.numOfChildren;
			room.selected = !!room.selected;
			return room;
		});
		return retVal;
	} catch (err) {
	  return undefined;
	}
 }; 