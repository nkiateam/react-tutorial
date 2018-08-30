
컴포넌트에 에러 발생
=======================================


- componentDidCatch

~~~
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
}
~~~

에러가 발생하면 자동적으로 componentDidCatch API 가 실행을 하고, state.error 를 true 로 설정하게 하고, render 함수쪽에서 이에 따라 에러를 띄워주시면 됩니다.

이 API 를 사용하시게 될 때 주의하실 점이 있는데요, 컴포넌트 자신의 render 함수에서 에러가 발생해버리는것은 잡아낼 수는 없지만, 그 대신에 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있습니다.