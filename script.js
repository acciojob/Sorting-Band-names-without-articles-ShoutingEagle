//your code here
const sortedBands = bands.sort((a,b) =>{
	if(a>b){
		return 1;
	}
	else{
		return -1;
	}
});
console.log(sortedBands);
