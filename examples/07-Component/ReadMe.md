
Class Component, Functional Component
=================================================================

## # 컴포넌트란 무엇인가?  
- **컴포넌트는 UI의 일부분을 묘사하는 자생적이고 독립적인 아주 작은 엔티티입니다.**  
    하나의 어플리케이션 UI는 더 작은 컴포넌트로 쪼개질 수 있으며 각각의 쪼개진 컴포넌트에 해당하는 코드와 구조, API가 있습니다.  
- **컴포넌트는 재사용이 가능합니다.**  
    여러 곳에서 동일한 컴포넌트가 쓰여야 한다면 JSX 구문을 이용해 컴포넌트가 보여지기 바라는 곳마다 명시해주면 됩니다.  
      
        
## # 함수형(functional) 컴포넌트  
함수형 컴포넌트는 그저 자바스크립트 함수입니다. 이 컴포넌트는 props로 부르는 입력을 선택적으로 취합니다.  
  
  <img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-PropsvsState.jpg">  
    
일부 개발자들은 컴포넌트를 정의하는 데 새로운 ES6 arrow 함수를 선호합니다.  
`Arrow 함수` 는 함수 표시를 하는 데 좀 더 군더더기 없이 깔끔하며 정확한 구문법(syntax)을 제공합니다.  
Arrow 함수를 사용함으로써 두 가지 키워드인 `function`과 `return`, 그리고 중괄호를 빼고 적용할 수 있습니다.  
```javascript
const Hello = ({ name }) => (<div>Hello, {name}!</div>);
```
  
    
## # 클래스(class) 컴포넌트  
클래스 컴포넌트는 더 많은 피처(features)를 제공합니다.  
함수형 컴포넌트가 아닌 클래스 컴포넌트를 선택하는 주된 이유는 `state`를 넣을 수 있다는 것 입니다.  
  
  <img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Class-Component.jpg">  
    
클래스 컴포넌트 작성 방법에는 두가지 방식이 있습니다. 
- `React.createClass()` 를 사용하는 것이 일반적인 방식입니다.  
- ES6 에서는 `React.Component`를 확장(extends)하는 class를 작성할 수 있는 syntax sugar을 도입했습니다.  
    그렇더라도 그런 방식들은 똑같이 작동하게 되어 있습니다.  
      
클래스 컴포넌트도 state 없이 존재할 수 있습니다.
```javascript
class Hello extends React.Component { // 입력을 받고 JSX로 넘겨주는 클래스 컴포넌트 예시
    constructor(props) {
        super(props);
    }
     
    render() {
        return(
            <div>
                Hello {props}
            </div>
        )
    }
}
```  
  
Props를 입력으로 받는 생성자(constructor) 메소드를 정의합니다.  
그 생성자 안에, 부모클래스로부터 상속 받은 무엇이건 전달하는 `super()`를 호출합니다.  
- **컴포넌트를 정의하는 동안 생성자는 선택입니다.**  
    위 예시의 경우 컴포넌트에는 state가 없고 생성자는 유용한 동작을 하는 것처럼 보이지 않지만 `render()` 안에 있는 `this.props`는 생성자가 정의 되거나 그렇지 않거나 상관없이 동작할 것입니다.  
    공식 [문서](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)에는 "**클래스 component는 `props`와 함께 기본 생성자를 호출해야합니다.**" 라고 적혀있습니다. 따라서  모든 클래스 컴포넌트에 관해 생성자를 사용할 것을 권장드립니다.  
    
- **생성자를 사용한다면 `super()`를 호출해야 합니다.**  
    이는 선택사항이 아니기 때문에 호출하지 않으면 `Missing super() call in constructor" 라는 구문 에러가 날 것입니다.  
      
- **`super()` vs. `super(props)`**  
    생성자 안에서 `this.props`를 호출하려고 할 때 `super(props)`를 사용해야 합니다. 그런 경우가 아니라면 `super()`만 사용해도 충분합니다.