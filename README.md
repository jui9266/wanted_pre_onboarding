# wanted_pre_onboarding
프리온보딩 선별과제

## Toggle
useState를 사용하여 Toggle값을 ture/false로 정해서 토글되도록했다.

## Tab
각 item별로 id에 index값을 가지고있다. 아이템을 클릭하면 index값으로 어떤 아이템을 클릭했는지 판별한다.

## Slider
input Range를 사용하여 구현하였다.
Range값의 변화를 onChange로 감지하여 usestate에 적용

## Input 
정규 표현식으로 이메일 형식 체크
usestate로 passowrd모드 상태변경 true일떄 input type='password' false일떄 input type='text'

## 어려웠던 부분
Slider.js가 가장 시간이 많이 걸렸다.
넓이를 고정값으로 정해주면 밑에 퍼센트값이 Range bar에 고정이 될텐데 가변 넓이로 하여 사서 고생했다.
display: flex를 사용하여 어느정도 값이 비슷하게는 되는데 살짝 아쉬운 부분이있다.