const arr = [];
const size = 1000;
let k=1;

for(let i=2; i<size; i++) {
	arr.push(i);
}

while(k<arr.length){
	for(let j=arr[i]*2; j<size; j=j+arr[i]) {
  	if(arr.indexOf(j)>0) {
	  	arr.splice(arr.indexOf(j), 1);
    }
  }
  k++;
}


console.log(arr);
