let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

const list = document.getElementById("band");

function strip(bandName){
	return bandName.replace (/a|the|an/i , '').trim();
}

function sortList() {
const sortedBands = touristSpots.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
renderArray(sortedBands);
}

function renderArray(arr) {
	let output = "";
	arr.forEach((e) => {
		output += `<li>${e}</li>`
	})

	list.innerHTML = output;
}
sortList();