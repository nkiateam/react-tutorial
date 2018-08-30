
Event
=================================================================

- 리액트에서 이벤트 함수를 설정할 때 html과 다음과 같은 사항이 다릅니다.  

  **이벤트 사용**
  - 이벤트 이름을 설정할 때 camelCase로 설정해주어야 합니다. onclick은 onClick, onmousedown은 onMouseDown, onchange는 onChange
  - 이벤트에 전달해주는 값은 함수여야 합니다. 만약에 `onClick={this.handleIncrease()}` 이런식으로 하게 된다면,  
    렌더링을 할 때마다 해당 함수가 호출됩니다. 그렇게 되면 렌더링 -> 함수호출 -> setState -> 렌더링 -> 함수호출 -> 무한반복...  
    그렇기 때문에 렌더링 함수에서 이벤트를 설정 할 때 스스로 만든 메소드를 호출하면 안됩니다.
    ```html
    // Javascript onclick event
    <button onclick="activateLasers()">
      Activate Lasers
    </button>
    ```
    ```html
    // React onClick Event
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
    ```
    DOM에서 onclick을 사용하듯이 리액트에서는 onClick에서 전처리기를 통해 함수명을 전달해줍니다.

  **이벤트 취소**
  - 자바스크립트에서 a 태그 사용 시, onclick 이벤트를 사용하면 href의 경로로 이동하게 되는데 리액트에서는 이를 방지하고 있습니다.

    ```html
    <!-- a 태그 사용 시, onclick 이벤트를 사용하면 href의 경로로 이동하게 되는데 이를 방지 -->
    <a href="#" onClick="console.log('The link was clicked'); return false">
      Click Me!
    </a>
    ```

    ```javascript
    function ActionLink() {
      function handleClick(e) {
        e.preventDefault(); // 발생할 다른 이벤트를 차단
        console.log('The link was clicked');
      }

      return (
        <a href="#" onClick={handleClick}>
          Click Me!
        </a>
      );
    }
    ```

  **이벤트 처리 함수**
  - `this.handleClick = this.handleClick.bind(this);`구문이 없다면 handleClick() 호출 시 this는 null 입니다.
  - bind 없이 호출 시 handleClick()의 this가 null 혹은 undefined 혹은 window가 되는 이유는 render에서 해당 함수를 호출하기 때문입니다.
  - 그렇기 때문에 생성자에서 this를 bind 해줘야 해당 컴포넌트의 this를 사용할 수 있습니다. 
    ```javascript
    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }
    
    ReactDOM.render(
      <Toggle />,
      document.getElementById('root')
    );
    ```
  
  **bind가 아닌 익명함수로 this 값 주기 -1**  
  - 이 방법은 Create React App 에서 기본적으로 사용하는 방법으로 바로 Arrow Function을 사용해서 handleClick에 익명함수를 할당하는 방식입니다.
  - class 내부에서 생성된 arrow function의 주소를 handleClick에 할당해주기 때문에 this를 우리가 의도하는 방향으로 사용할 수 있습니다.
    ```javascript
    class LoggingButton extends React.Component {
      // This syntax ensures `this` is bound within handleClick. 
      // Warning: this is *experimental* syntax. 
      handleClick = () => {
          console.log('this is:', this);
      };
    
      render() {
        return (
          <button onClick={this.handleClick}>
            Click me
          </button>
        );
      }
    }
    ```

  **bind가 아닌 익명 함수로 this 값 주기 -2**  
  - onClick에서 익명함수로 e를 전달해줍니다. 하지만 이렇게 사용할 경우 추가 재랜더링을 수행할 수도 있습니다.
  - 일반적으로 성능문제 등으로 인하여 생성자에서 bind하는 방식을 공식문서에서는 권장하고 있습니다. 
    ```javascript
    class LoggingButton extends React.Component {
      handleClick() {
        console.log('this is:', this);
      }

      render() {
        // This syntax ensures `this` is bound within handleClick 
        return (
          <button onClick={(e) => this.handleClick(e)}>
            Click me
          </button>
        );
      }
    }
    ```
     

### Mouse Events
 : onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit,  
   onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave,  
   onMouseMove, onMouseOut, onMouseOver, onMouseUp


### Form Events
 : onChange, onInput, onSubmit


 ### Clipbiard Events
  : onCopy, onCut, onPaste

https://facebook.github.io/react/docs/events.html

