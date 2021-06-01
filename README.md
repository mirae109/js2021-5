
# 김미래[202030404]
<h2 id=index>Index</h2><br>
<ul>
	3월
	<br><br>
	<li><a href="#1">3월 16일 : js기초와 실습 환경 구축</a></li>
	<li><a href="#2">3월 23일 : 변수, 연산자, 함수, 조건문(1)</a></li>
	<li><a href="#3">3월 30일 :조건문(2), 반복문(1)</a></li><br>
	4월
	<br><br>
	<li><a href="#4">4월 6일 : 반복문(2), 별찍기</a></li>
	<li><a href="#5">4월 13일 : 함수 </a></li>
	<li><a href="#6">4월 27일 : 객체(1)</a></li><br>
	5월<br><br>
	<li><a href="#7">5월 11일 : 객체(2), 예외처리</a></li>
	<li><a href="#8">5월 18일 : Node.js </a></li>
	<li><a href="#9">5월 25일 : express 모듈 </a></li>
	6월<br><br>
	<li><a href="#10">6월 01일 : express 모듈 </a></li>
	<br><br>
	
</div>
<div id="10">
	
 ##  **[06월 01일]**
 ### 1. 사용할 수 없는 코드

- let 키워드, const 키워드
- 템플릿 문자열
- 화살표 함수
- for of 반복문

### 2. 브라우저 객체 모델

 참조 사진 잘 보기 (중요!)

3. window 객체 : 웹 페이지  자체를 나타냄 

4. screen 객체 

5. location 
제이쿼리 쓰는 법: $(매개변수).foo(매개변수)

- 제이쿼리 객체 생성

```jsx
$('h1');
$('<h1><h1>');
```

### 3. 문서 객체 선택

```jsx
$('h1')
$('h1.logo')
```

```jsx
<script>
$(document).ready(funtion(){
	var $headers = $('h1');
for(var i = 0; i < $headers.length; i++){
if( i % 2 == 1 ) {  
		var domElement = $headers.get(i); 
		$(domElement).css('backgroundColor', 'red');
	}
}
</script>

```

- odd선택자 , even선택자

### 5. 문서 객체 조작

```jsx
$('h1').txet()
$('h1').html()
```

```jsx
<script>
        $(document).ready(function(){
            for(var i = 0; i<256; i++){
                $('<div></div>').css({
                    height: 2,
                    background: 'rgb(' +i+ ',' +i+ ',' +i+ ')'
                }).appendTo('body');
            }
        });
    </script>
```
.each 의 역할: for문 대신 사용한다. 

```jsx
<script>
        $(document).ready(function(){
                $('img').each(function (index, element){
                   $(this).attr('src', 'http://plachold.it/' + (index+1) *100 + 'x100');
                });
        });
    </script>
```

### 6. 문서 객체 생성

```jsx
<script>
    $(document).ready(function(){
       $('<h1></h1>')
            .text('안녕하세요')
            .attr('data-test', 'test')
            .css({backgroundColor: 'red',color: 'white'})
            .appendTo('body');
    });
    </script>
```
	
### 7. 이벤트

```jsx
<script>
    $(document).ready(function(){
       $('h1').on('click', function (event){
            var text = $(this).text();
            alert(text);
       });
    });
    </script>
```

```jsx
<script>
    $(document).ready(function(){
       $('h1').on('click', function (event){
            $('<h1></h1>').text($(this).text()).appendTo('body');
       });
    });
    </script>
</head>
<body>
    <h1>ON</h1>
</body>
```

### 8. 애니메이션 

$(선택자).animate(속성, 시간, 콜백 함수);
	
</div>
<div id="9">
	
## **[05월 25일]**
	
VScode에서 Node JS Express를 이용해서  서버를 만들어볼꺼임 왜? 모듈쓰면 서버 만들기 편해서.

근데 Express 모듈이 뭐임? 레고 세트 같은거임

http 서버 모듈쓰면 직접 설정할 게 많은데 미리 있는거 쓰는거임

VScode에서 원하는 폴더를 열고 터미널에 이렇게 입력해

```jsx
npm init

npm install express
```

둘 다 따로 입력하고 실행하면 준비는 다 된거임

제대로 시작하기 전에 기본 메소드를 집고 넘어가 볼거임

1. express() 서버 애플리케이션 객체를 생성함
2. app.use() 요청오면 실행할 함수 지정함
3. app.listen() 서버 실행함

아직 몰라도 됨. 하나하나 해보자

먼저, 모듈 추출을 하자

```jsx
const express = require('express');
```

메소드로 생성자를 만들자 ~~(자바?)~~

```jsx
const app = express();
```

request 이벤트 리스너를 생성할 거임

```jsx
app.use((request, response) => {
	response.send('<h1>Hello</h1>');
});
```

요청,응답 함수를 이용한 거다 웹에 저렇게 띄워질 거임

이제, 드디어 서버를 실행해보자 

```jsx
app.listen(52273, () => {
	console.log('Server running at http://127.0.0.1:52273');
});
```

실행하면 잘 뜬다.
	
</div>
<div id="8">
	
## **[05월 18일]**
### 1. 전역변수

전역 변수/객체/함수 : 모든 곳에서 사용할 수 있는 것들

### 2. process 객체의 속성과 이벤트

### 3. process 객체와 이벤트 개요

이벤트 연결 메소드(on) 과 객체 이벤트를 함께 사용한다. 

- **종료 + 이벤트를 연결합니다**

    on(<이벤트이름>,<이벤트 핸들러>) + exit

    ```jsx
    process.on('exit',() => {
    	console.log("process 종료");
    });
    ```

    이벤트 핸들러를 , 부터 ~ 끝까지 로 작성했다. 

    이때 화살표 함수로 작성되어졌다. 

- **예외 + 이벤트를 연결합니다**

    on(<이벤트이름>,<이벤트 핸들러>) + uncaughtException

    ```jsx
    process.on('uncaughtException',() => {
    	console.log("예외 발생");
    });
    ```

### 4. os 모듈

```jsx
const foo = require('os'); //모듈 추출

console.log(foo.hostname());  //운영체제 호스트 이름 리턴 
console.log(foo.totalame());  //시스템 총 메모리 리턴 
```

### 5. url 모듈

```jsx
const foo = requrire('url');

console.log(foo.parse("https://naver.com"));
//url문자열을 객체로 변환 후 리턴 
```

### 6. 파일 시스템 모듈

```jsx
const fs = require('fs');
const fs = readFileSync("text.txt");  

console.log(file);             //파일 내용이 16진수로 나옴 
console.log(file.toString());  //파일 내용이 문자로 나옴 
```

- 동기적 - 파일 읽기  (fs.readFileSync()메소드)
- 비동기적 - 파일 읽기  (fs.readFile()메소드)

    → 전체 파일을 읽는 것과 관계없이 실행한다. 

- 동기적 - 파일 쓰기

```jsx
const fs = require("fs");

fs.writeFileSync("text.txt", "안녕하세요");
```


</div>
<div id="7">
	
## **[05월 11일]**
### **Date 객체**

get ... ()객체 , set ... () 객체 : FullYear, Month , Day , Hours 등등 

```jsx
let foo = new Date(); //객체 생성
console.log(foo);
```

- 메소드 활용
1. 시간 더하기 : 객체 +n 을 활용한다.  

    ```jsx
    let foo = new Date();

    foo.setFullYear(foo.getFullYear() +1);
    foo.setMonth(foo.getMonth() +1);
    foo.setDate(foo.getDate() +1);

    console.log(foo);
    ```

2. 시간 간격 구하기  : 2개 시간을 뺀다 → 일 단위로 나눈다 

    ```jsx
    let foo = new Date();
    let before = new Date("Dec 9, 2020");

    let interval = now.getTime() - before.getTime();
    interval = Math.floor(interval / (1000 * 60 * 60 * 24);

    console.log(interval);
    ```

### Array 객체

```jsx
let foo = [10, 3, 4, 20];   //기본 배열 
let foo = [{}, {}, {}, {}]  //띠용 .. 이걸 아래와 같이 씀. 
```

```jsx
let foo = [
	{
		//key: value        
		name: '초콜렛',
		price: 1000
	},{
		name: '마카롱',
		price: 2000
	}
];

let popped = foo.pop();
console.log(foo);
console.log(popped);

foo.push(popped);
foo.push(
	{
		name: "딸기",
		price: 2000
	},{
		name: "토마토",
		price: 2000
	}
);

console.log(foo);
console.log(popped);
```

( 배열 정렬은 별도의 라이브러리를 주로 쓴다. )

- **ECAMAScript5에서 추가된 메소드**
1. **forEach** = 인덱스, 아이템 값 둘 다 추출

    ```jsx
    let foo = [11, 22, 33, 44];

    foo.forEach((item, index) => {
    	console.log(`${index} - ${item}`);
    });
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3931fd3-59ab-483f-b988-5be7443eaab2/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3931fd3-59ab-483f-b988-5be7443eaab2/Untitled.png)

2.  **map()** = 아이템 값만 추출

    ```jsx
    let foo = [11, 22, 33, 44];

    let bar = foo.map((item, index) => {
    	return item + 10;
    });
    console.log(bar);
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/022cff49-8935-47f9-b0ab-f6d0d7526fd9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/022cff49-8935-47f9-b0ab-f6d0d7526fd9/Untitled.png)

3.  **filter()** = 리턴에 조건달기

    ```jsx
    let foo = [11, 22, 33, 44];
    ****
    let foobar = foo.filter((item, index) => {
    	return item % 2 == 0;
    });
    console.log(foobar);
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c0c93cd-17c4-4cfa-916b-2212ee4bcaae/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c0c93cd-17c4-4cfa-916b-2212ee4bcaae/Untitled.png)

### underscore.js 사용하기

1. underscore.js 홈페이지 들어가서 링크를 다른 이름으로 저장하기! (minified는 압축파일)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/591c3ceb-89ac-46cf-a521-20e2abfbfbbd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/591c3ceb-89ac-46cf-a521-20e2abfbfbbd/Untitled.png)

2. vscode에 파일 넣고, 스크립트 링크 걸기!  그 후 사용한다. 

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/342b9bba-5276-4237-91d7-7a79be971c34/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/342b9bba-5276-4237-91d7-7a79be971c34/Untitled.png)

3. 콘솔창에서 결과를 확인 가능하다

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93943060-6249-4805-97b5-11698aa8f0cd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93943060-6249-4805-97b5-11698aa8f0cd/Untitled.png)

### JSON 객체

1. 문자열 = 큰따옴표 
2. 모든 키 = 큰따옴표 감싸기
3. 숫자, 문자열, 불 자료형만 사용 가능 

- **JSON 객체 메소드**
1. JSON.stringify ( ) 메소드 : 문자열 리턴
2. JSON.parse ( ) 메소드 : 객체 리턴

# 8장 예외 처리

- 기본 예외 처리 - ifelse문으로 처리한다. ~~너무 복잡해!~~
- **고급 예외 처리 - try catch finally 구문**

```jsx
try{
	//예외
} catch{
	//처리
} finally{
	//무조건 실행하는 자리
}
```

→ 예외상황 ****(배열 길이 음수)

```jsx
try{
	const array = new Array(-2000);
}catch(e){
	console.log(`${e.name}예외발생`);
}finally{
	console.log(`무조건 실행~`);
}

```

- **throw 키워드  - 강제 예외 발생기**

```jsx
throw '강제 예외';
```

```jsx
const error = new Error('메세지');
error.name = '엉망진창 오류';
error.message = '지금은 오류!';

throw error; 
```

</div>
<div id="7">
	
## **[05월 04일]**
**생성자 함수** 

- 대문자로 시작 (객체는 소문자)

```jsx
function Product(name, price){
	this.name = name;
	this.price = price; 
}
```

**프로토타입**

프로토타입 = 공간 

객체 → 프로토타입에 메소드 지정함. 

```jsx
Product.prototype.print = funtion(){
  ~ 
}
```

## 7장 표준 내장 객체

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3275e9c7-edeb-4a69-af9a-e517e8b5db24/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3275e9c7-edeb-4a69-af9a-e517e8b5db24/Untitled.png)

모질라에서 제공한 객체 사전, 한 번 흩어보자

( vscode 에서 자동완성기능을 제공한다. )

**기본 자료형과 객체 자료형 차이**

자료형

```jsx
let number = 23;
let string = '안녕';
let boolean = true;

console.log(typrof number); //23
```

객체

```jsx
let number = new Number(23);
let string = new String('hi');
let boolean = new Boolean(true);

console.log(typeof number); //object 
```

- 기본 자료형은 속성이나 메소드를 추가하지 못하지만, 프로토타입 이용하면 가능!

```jsx
let primitiveNumber = 273;

Number.prototype.method = function(){
	return 'Primitive Method'; 
};

console.log(primitiveNumber.method());
```

**Number객체**

```jsx
let number = 12;
let number = new Number(21);
```

- Number객체 **메소드**
    1. toExponential()   = 숫자 → 지수 표시 로 나타낸 문자열 리턴
    2. toFixed()             = 숫자 → 고정소수점 로 나타낸 문자열 리턴  
    3. toPrecision()       = 숫자 → (길이따라) 지수 || 고정소수점 로 나타낸 문자열 리턴 

    ```jsx
    let foo = 25.123
    console.log(foo.toExponenial(1)); //25.1  
    ```

- Number객체 생성자 **함수 속성**
    1. MAX_VALUE             = js가 나타내는 최대수
    2. MIN_VALUE 
    3. NaN                         = js숫자로 못나타냄
    4. POSITIVE_INFINITY  =양의 무한대 수
    5. NEGATIVE_INFINITY

    ```jsx
    let foo = Number.MAX_VALUE;
    let bar = Number.MAX_VALUE +1;

    console.log(foo); //1.797...
    console.log(bar); //1.797...
    ```

    Q. 생성자 함수가 속성을 가질 수 있을까?

    ```jsx
    function Construtor(){}
    Constructor.foo = 12;
    Constructor.bar = function(){};

    console.log(Construtor.foo); //12
    console.log(Construtor.bar); //function()
    ```

**String 객체**

```jsx
let string = '안녕';
let string = new String('안녕');
```

- String 객체의 **메소드**

    (종류 너무 많음)

    ```jsx
    let string = 'a';

    string = string.toUpperCase();
    console.log(string);
    ```

    string의 메소드를 쓰고 싶다면 ? 원본 데이터를 변경하지 않기 때문에 따로 저장을 해야 함.

- String 객체의 **메소드 활용**

    ```jsx
    let foo ="좋은 아침입니다.";

    if(foo.indexOf('아침') >= 0){
    	console.log("굿모닝");
    }else{
    	console.log("굿나잇");
    }

    //굿나잇
    ```

- String 객체의 **객체**
    1. length
   
</div>
<div id="6">
	
## **[04월 27일]**
6. 표준 내장 함수 

- 타이머 함수

    선언 방법

    ```jsx
    setTimeout(함수,시간)
    setlnterval(함수,시간)
    ```

    예제

    ```jsx
    let foo = setInterval(() => {
    	console.log("인터벌1초경과");
    },1000)

    setTimeout(() => {
    	clearInterval(foo);
    }, 6000)
    ```

---

## 6. 객체

- json 예제

    ```jsx
    let product = {
    		제품명: '건조 망고', //키 : '데이터'
    		유형: '당절임',
    		원산지: '필리핀'
    	};

    console.log(product);
    console.log(product.제품명); 

    ```

- 배열 예제

    ```jsx
    let foo = ["사과", "배", "바나나"];

    console.log(foo[0]);
    ```

- 객체, 반복문

    ```jsx
    let product = {
    		제품명: '건조 망고', //키 : '데이터'
    		유형: '당절임',
    		원산지: '필리핀'
    	};

    for( let key in product ){
    		console.log(`${key}:${product[key]}`);
    }
    ```

요소 : 배열 내부 값
속성 : 객체 내부 값

- 예제

```jsx
let foo = {
		name: "건조 망고",
		price: 1200,
		print: function(){
				console.log(`${this.name}-${this.price}`);
		}
};

foo.print();
```

this 가 있을 경우 funtion 을 = > 으로 바꾸지 못한다. (아래 예시)

```jsx
let foo = {
		name: "건조 망고",
		price: 1200,
		print: => {
				console.log(`${this.name}-${this.price}`);
		}
};

foo.print();
```

- 생성자 함수와 프로토타입

```jsx
let product = [
	{name: '사과', price:1200},
	{name: '자두', price:1500},
	{name: '배', price:1100},
	{name: '딸기', price:1000},
];

function printProduct(product){
	console.log(`${product.name}-${product.price}`);
}
for(let foo of product ){
	printProduct(product);
}

```

```jsx
function Product(foo, bar){
	this.foo1 = foo;
	this.ber1 = bar;
}

let product = new Product("바나나:,1200);

console.log(product);

```
</div>
<div id="5">
	
## **[04월 13일]**
1. **익명 함수**  
    - 생성 방법

    ```java
    let <변수명> = funcion() { }; 
    ```

    - 예제

    ```java
    let foo = function(){
    	console.log("첫번째줄");
    	console.log("두번째줄");
    };
    foo();
    console.log(foo);
    ```

2. **선언적 함수** 
    - 생성 방법

    ```java
    funtion 함수명(){  }
    ```

    - 예제

    ```jsx
    funtion foo(){
    	console.log("첫 줄");
    	console.log("두번째줄");
    }
    console.log(foo);
    ```

3. **화살표 함수** 

    funtion 키워드를 안쓰는 대신 소괄호를 가리킨다. 

    - 생성 함수

        ```jsx
        let 함수명 = () => {
        ```

    - 예제

        ```jsx
        let foo = () => {
        	console.log("첫줄");
        	console.log("두번째줄");
        }
        foo();
        console.log(foo);
        ```

    **4. 함수의 기본 형태**

    - 예제

        ```jsx
        funton power(x){
         return x * x;
        }
        console.log(power(10));
        console.log(power(20));
        ```

        ```jsx
        funton foo(x){
        let bar x * x;
        return bar;
        }
        console.log(bar(10));
        console.log(bar(20));
        ```

    5.  **함수 매개 변수 초기화**

    ```jsx
    funtion print(message){
    	console.log(`"${message}"라고 말했습니다.`);
    print("안녕");
    ```

    note 화살표 함수와 리턴

    ```jsx
    let power = (x) => { x*x; }

    console.log(lpower(10));
    console.log(lpower(10));
    ```

    6. **함수의 기본 활용 형태** 

    - 매개변수와 리턴 예제

        ```jsx

        ```

    ## 4 **함수 매개 변수 초기화**

    - if문 예제

    ```jsx
    function print(name, count){
    // !count는 count에 값이 안들어왔을때.. 
    if(!count){
        count = 1;
    }
    console.log(`${name}이 ${count}개 있습니다.`)
    }
    print("사과");
    ```

    - 조건문 예제

    ```jsx
    function print(name, count){
    	count = count || 1;

    console.log(`${name}이 ${count}개 있습니다.`)
    }

    print("사과");
    ```

    - defalt 예제

    ```jsx
    function print(name = "#", count = "n"){

    console.log(`${name}이 ${count}개 있습니다.`)
    }

    print("사과");
    ```

    ## 5 콜백 함수

    ```jsx
    funtion tenTimes(foo){
    	for(let i =0; i < 10; i++){
    		foo();
    	}
    }
    tenTimes(funtion(){
    	console.log("함수 호출");
    });

    //매개변수로 함수를 받을 수 있는 js. 
    // 해당 예제에선 무명 함수를 썼음. 
    ```

    ## 6 표준 내장 함수

    - 숫자 변환 함수

        ```jsx
        let inputA = "1";
        let inputA = "1.1";
        let inputA = "1동";
        //문자열과 숫자 함께 있는 간 젼화 ㅌ
        console.log(parseInt(input1))
        console.log(parseFloat(input2))
        console.loA(number(input3))
        ```

     

    - 타이머 함수

        ```jsx
        //1초후 
        setTimeout(() => {
        	console.log("1초");
        }, 1000); 
        ```

        ```jsx
        //1초마다
        setInterval(() => {
        	console.log("1초");
        }, 1000); 
        ```
</div>	
<div id="4">
	
## [04월 06일]
- for in 반복문

    ```jsx
    let foo = [1,2,3,4,5];

    for ( let i in foo ){
        console.log(`${i}번째 요소는 ${foo[i]}이다.`)
    }
    ```

- for of 반복문  (배열 값만 가져올 때)

    ```jsx
    let foo = [1,2,3,4,5];

    for ( let item of foo ){
        console.log(item) 
    }
    ```

- 중첩 반복문 (삼각 별 찍기 )

    ```jsx
    let output = "";

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < i+1; j++) {
        output += "*";
        }
    output += "\n";

    }
    output += "\n";
    console.log(output);
    ```

    1. 일반 for문과 달리 let 을 적음
    2. printf 대신 output 
    3. console.log() 를 통해 출력을 함

- 중첩 반복문 ( 역삼각 별 )

    ```jsx
    let output = "";

    for ( let i = 0; i < 10; i++){
        for (let j = 0; j < 10 - i; j++){
            output += ' '; }
        for (let j = 0; j < i + 1; j++){
            output += '*'; }
        output += '\n';
    }
    console.log(output);
    ```

    - 정삼각 별 ( 정방향 )

    ```jsx
    let output = "";

    for ( let i = 0; i < 10; i++){

        for (let j = 0; j < 10 - i; j++){
            output += ' '; }

        for (let j = 0; j < i + 1; j++){
            output += '*'; }

        for (let j = 1; j < i + 1; j++){
            output += '*'; }

        for (let j = 0; j < 10 - i; j++){
            output += ' '; }

        output += '\n';
    }
    console.log(output);
    ```

    ```jsx
    let output = "";

    for ( let i = 0; i < 10; i++){

        for (let j = 0; j < i + 1; j++){
            output += ' '; }

        for (let j = 0; j < 10 - i; j++){
            output += '*'; }

        for (let j = 1; j < 10 - i; j++){
            output += '*'; }

        for (let j = 0; j < i + 1; j++){
            output += ' '; }

        output += '\n';
    }
    console.log(output);
    ```

- 다이아 모양

    ```jsx
    let output = "";

    for ( let i = 0; i < 11; i++){

        for (let j = 0; j < 10 - i; j++){
            output += ' '; }

        for (let j = 0; j < i + 1; j++){
            output += '*'; }

        for (let j = 1; j < i + 1; j++){
            output += '*'; }

        for (let j = 0; j < 10 - i; j++){
            output += ' '; }

        output += '\n';
    }
    for ( let i = 0; i < 10; i++){

        for (let j = 0; j < i + 1; j++){
            output += ' '; }

        for (let j = 0; j < 10 - i; j++){
            output += '*'; }

        for (let j = 1; j < 10 - i; j++){
            output += '*'; }

        for (let j = 0; j < i + 1; j++){
            output += ' '; }

        output += '\n';
    }
    console.log(output);
    ```

- break 키워드

    ```jsx
    let i =0; 
    let array = [1,31,321,57,8];
    let output;

    while (true) {
    	if (array[i]%2 == 0){
    	output = array[i];
    	break;
    }
    i = i + 1;
    }

    console.log(`처음 발견한 짝수는 ${output}입니다`) 
    ```

- continue  키워드

    ```jsx
    for (let i = 1; i < 10; i++){
    	if ( i % 2 == 0 ){
    		continue;
      }
    console.log(i)
    }
    ```

    ```jsx
    for (let i = 1; i < 10; i++){
    	if ( i % 2 == 0 ){
    		console.log(i)
      }
    }
    ```

    - 스코프 == 블럭 ( 변수 사용 범위 )
    - 호이스팅 == 작업 ( 별로 안중요 )
    - var → let 으로 바뀜 ( 인터넷 익스플로어에선 var 를 사용 )
</div>
<div id="3">
	
## [03월 30일]

- 중첩 조건문

    ```jsx
    let date = new Date();
    let hours = date.getHours();

    if (hours < 11 ){
    		console.log("아침");
    } else {
    	if (hours < 15) {
    	console.log("점심");
    	} else {
    	console.log("저녁");{
    	}
    }
    ```

- note 논리 연산자와 조건문

    ```jsx
    else if (4.2<= score && score < 4.5)
    ```

    주의점 : 4.0점 부터 4.5점을 가리킬 때 

    → 4.2 ≤ score && score < 4.5 

    ( and 연산자 사용)

    조건이 어떤 범위를 가리킬때는 if문을 쓰는 거고,  특정 값을 나타낼 때는 swich문을 쓴다. 

- switch 조건문

    ```jsx
    let input = 32; 

    switch (input % 2){
    	case 0:
    			console.log("짝");
    			break;
    	case 1:
    			console.log("홀");
    			break;
    }
    ```

    ```jsx
    let date = new Date();
    console.log(date.getMonth());

    switch (date.getMonth()+1){
    	case 12:
    	case 1:
    	case 2:
    		console.log("겨울");
    		break;
    	case 3:
    	case 4:
    	case 5:
    		console.log("봄");
    		break;
    	case 6:
    	case 7:
    	case 8:
    		console.log("여름");
    		break;
    	case 9:
    	case 10:
    	case 11:
    		console.log("가을");
    		break;
    default:
    	console.log("외계인")
    	break;
    }
    ```

주의 : case 는 땡땡( : ) 임을 기억하자! + defalt 도 ( : ) 임.

- 삼항 연산자

    ```jsx
    < 불 표현식 > ? <참> : <거짓>
    console.log(number % 2 == 0 ? true : false );
    ```

주의 : 연산 결과에 따라 변하는 식에는 적합하지 않다. 

- 삼항 연산자로 변수 초기화를 확인하기  ( 자주 사용하진 않음 )  ❓

    ```jsx
    let test;

    test = test ? test : "초기화합니다_1";
    console.log(test);
    test = test ? test : "초기화합니다_2";
    console.log(test);
    ```

- 입력하기

    ```jsx
    let input = prompt("입력해주세요");
    console.log(input);

    const repl = require("repl");

    repl.start({
    	prompt: "숫자 입력>",
    	eval: ( command, context, filename, callback) => {
    		let number = Number(command);
    		
    		if (isNaN(number)){
    			console.log("숫자가 아님");
    	 } else {
    			console.log("숫자");
    	 }

    			callback();
    	}
    });
    ```

    require 는 어디에 쓰는 걸까?

## 4장 반복문

- 배열

    ```jsx
    let foo =["피자", "치킨", "햄버거", '돈가스' ]

    console.log(foo[1]);
    ```

- while 문

    ```jsx
    let i = 0;
    let array =[23, 35, 345, 234];

    while ( i < array.length ){
    	console.log( i + "번째 출력 : " + array[i]);
    i++
    }
    ```

    for문과 while문은 서로 변환 가능하지만, 
    반복의 횟수가 미정일 때 while문 사용한다. 

- for문

    ```jsx
    let output = 0;

    for (let i = 0; i <= 100; i++ ){
    	output += i;
    }

    console.log(output);
    ```

- 역 for문  ( i - - )

- for in 문 , fot of 문

    ```jsx
    let array = ["피자", "치킨", "햄버거", '돈가스' ];

    for (let i in array){
    		console.log( '${i}번째 요소: ${array[i]}');
    }
    ```

    ```jsx
    let array = ["피자", "치킨", "햄버거", '돈가스' ];

    for ( let item of araaay) {
    		console.log(item);
    }
    ```

 for in : 인덱스 주소 필요해 
 for of : 인덱스 없이 값만 쓸꺼야
 
 </div>
 <div id="2">
	
## [03월23일]

- **피제수/제수**

    미제수: 나뉘어지는 수

    제수: 나누는 수 

    (앞이 - 일때만 - 결과가 나옴)

- **나머지가 소수점인 경우** (실수%실수)

    나머지 연산자가 가능은 한데 사용하지 않는 것이 좋음. 

- **문자열**

    ", ' 둘다 사용 가능

    "안에 "를 쓰고 싶을 때 : \"랑 \" 를 써서 사용가능. 

    - 이스케이프 문자

        \t , \n, \', 

- **템플릿 문자열** (  ` `사용)

    템플릿 문자열을 생성하면 ' ' 가 찍혀서 나옴. 

    ```jsx
    ` 23+12= ${23+12} ` 
    ```

    ```jsx
    `올해는 ${new Date().getFullYear()}년입니다.`
    ```

- **불 (T/F)**
    - 비교연산자

        같음 ==

        다름 ! =

    - 문자 비교 (아스키코드)

        ```jsx
        "A" > "B"
        false
        "A" < "B"
        true
        ```

    - 논리합 연산자 : or (둘중하나) : ||

        논리곱 연산자 : and (둘다) : &&

        ```jsx
        true || false
        //true
        true && false
        //false
        ```

    - 불과 논리 연산자

        예제2-8

        ```jsx
        let hours = (new Date()).getHours();

        console.log(hours<3 || 8<hours);
        console.log(3<=hours && hours<= 8);
        ```

        교수님이 쓴 예제2-8     → 변수 선언 후 사용 

        ```jsx
        let date = new Date();
        h = date.getHours

        console.log(hours<3 || 8 <hours);
        console.log( 3 <= hours && hours <= 8);
        ```

### 4. **변수**

변수 선언 키워드 var..let.. 여러가지였지만 let 한 개로 통일함. 

```jsx
let pi;
//undefined
pi = 3.141592;
//3.141592
let pi = 3.14;
//undefined
pi
//3.14
```

### 5. 복합대입연산자

a+=10   a=a+10

### 6. 증감 연산자

변수++

++변수 

변수 - -

- - 변수 

### 7. 자료형 검사

- 자료형 확인 연산자

    typeof  → 해당 변수의 자료형 추출

    ```jsx
    typeof 10
    // "number"
    ```

### 8. undefined 자료형

### 9. 강제 자료형 변환

### 9.1 Number() 함수와 NaN (not a number)

- 자기 자신과 일치하지 않은 유일한 값
- 자기 자신도 일치하지 않기 때문에 nan == nan 이 false다.
- typeof(nan) → number

### 9.2 Boolean() 함수 (false 변환값)

### 10. 자동 자료형 변환

10.1 숫자, 문자열 자료형 자동 변환 (+)

' + ' 연산자 사용 → 숫자가 문자열로 자동 변환

10.2 불 자료형 자동 변환

```jsx
console.log(!!0);
```

### 11. 일치 연산자

=== 

! ==

### 12. 상수

상수 선언 → const 

## 3장 조건문

### 1. if 조건문

```jsx
let input = 2;

if ( input %2 ==0){
console.log ("짝수");
}
else {
    console.log("홀수"); }
```

```jsx
if (date.getHours() < 12 ) {
    console.log("오전");
}
console.log("오후");
```

</div>
<div id="1">
	
## [03월16일]
## 2. 자바스크립트로 할 수 있는 일

웹 APP, 웹 서버, 모바일 APP, 데스크탑 APP, 게임 개발 O

- 웹 클라이언트 APP 개발 (주 목적)

      웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어  

      웹 클라이언트 어플리케이션: 웹메일, 블로그 등 (설치 필요X)

- 웹 서버 개발 ( Node.js → 클라이언트+서버 둘다가능)

     Node.js 장점: 빠름 /  단점: 복잡함

    (Linked in 사이트 : 기존 루비로 구축한 서버를 JS로 바꾸니 하드웨어 사용량 감소/ 속도 증가)

     http 와 https 의 차이: s가 seculity(보안)

     https 는 정보 이동 시의 보안 존재. 

- 모바일 APP 개발(네이티브 앱)

    React → JS로 만든 UI 프로그램

    React Native → JS로 pc, moblie 둘다 개발 가능 (크로스핏 O) - 완벽 호환X

- 데스크탑 APP 개발

    atom, vscode 등 (설치 필요)

- 게임 개발

    Unity - JS기반으로 제작 

- 데이터베이스 관리

    MoangoDB : 데베관리 시 JS 활용하는 NoSQL (SQL을 안써도 되는 것)

    ## 3. 실습 환경 구축

    Node.js 설치 → cmd 에 node 입력 후 설치 확인
    
    >vscode에서 깃허브로 푸쉬하는 법:  깃허브엔 하나의 폴더만 연결한다 → 연결되고 + 하고 >체크 표시(푸쉬)를 코멘트와 함께 올려준다 → 반드시 vscode 왼쪽 하단의 동기화를 누른다.

</div>


