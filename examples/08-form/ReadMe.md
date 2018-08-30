
Form
=================================================================

HTML Form Element는 내부 state를 가지고 있어, 리액트에서의 DOM Element와 조금 다르게 동작합니다. 예를 들어서, 기존 HTML에서는 다음과 같이 작성됩니다.
```
<form>
  <label>
    Name: <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
이 HTML Form은 사용자가 Form을 전송하면, 새로운 페이지로 이동하는 기본 동작을 가지고 있습니다. 만약 리액트에서도 이러한 동작을 원한다면, 그냥 동작합니다.

그러나 대부분의 경우에는 Form의 Submit을 처리하고, 사용자가 입력한 데이터에 접근하는 함수를 만드는 것이 편리합니다. 이를 위한 표준 방식으로 "Controlled Components"라는 기술을 사용합니다.

### Controlled Components
HTML에서 input, textarea, select 같은 Form Element는 보통 자신만의 state를 가지고 사용자 입력에 따라 업데이트됩니다. 리액트에서는 변경되는 state는 보통 Component의 state 속성에 존재하며, setState()만을 사용해서 업데이트해야 합니다.

리액트 state를 "신뢰가는 단일 소스(single source of truth)"로 만들면, 위의 두 요소를 결합할 수 있습니다. 그러면 렌더링된 리액트 Component는 Form에서 발생하는 사용자 입력을 제어합니다. 이러한 방식으로 리액트에서 제어되는 Input Form Element를 "Controlled Component"라고 합니다.




