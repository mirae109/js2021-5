let foo = "";

for(let i=0; i<10; i++){
	for(let j=0; j<10-i; j++){
		foo +=' ';
	}

	for (let j =0; j < i+1; j++){
		foo += '+';
	}

	for (let j =0; j < i+1; j++){
		foo += '+';
	}
	
	foo += '\n';
}
console.log(foo);