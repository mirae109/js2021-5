#김미래[202030404]
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




