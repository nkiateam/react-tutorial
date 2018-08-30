// Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// counter
import Counter from './counter/components/Counter';
import counter from './counter/reducers';

// 스토어 생성 
const store = createStore(counter);

function render() {
    ReactDOM.render(<Counter value={store.getState()}
                            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
                    document.getElementById('app'));
}

render();
store.subscribe(render);


// todomvc
import { Provider } from 'react-redux';
import App from './todomvc/containers/App';
import configureStore from './todomvc/store/configureStore';

const todomvcStore = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
    Provider는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트 입니다.
    react 에서 redux 를 사용하려면, 가장 부모가 되는 루트 컴포넌트를 렌더링 할 때 Provider 컴포넌트도 루트 컴포넌트를  감싸 주어야 합니다.

    Provider 컴포넌트에 store 속성을 줬는데, 이때 우리가 생성한 store를 넣어주면 redux를 사용할 수 있습니다.
*/
ReactDOM.render(
    <Provider store={todomvcStore}> 
        <App />
    </Provider>,
    document.getElementById('todoapp')
);