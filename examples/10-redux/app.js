// Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';

const store = createStore(counter);

function render() {
    ReactDOM.render(<Counter value={store.getState()}
                            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
                    document.getElementById('app'));
}

render();
store.subscribe(render);
