# 김미래[202030404]

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




