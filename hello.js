//변수 선언 
let foo = ["아메리카노","카페라떼", "카페모카"];

//for in 
for (let i in foo){
	console.log(`${i}번째 요소: ${foo[i]}`);
}

//for of 
for(let item of foo){
	console.log(item);
}