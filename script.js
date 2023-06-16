//your code here
const sortedBands = band.sort((a,b) =>{
	if(a>b){
		return 1;
	}
	else{
		return -1;
	}
});
console.log(sortedBands);
