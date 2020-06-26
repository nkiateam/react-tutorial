/*  
    4. 스토어 생성
    redux 의 스토어가 서버쪽에서 생성 될 수도 있고 클라이언트쪽에서 생성 될 수도 있기 때문에
    스토어를 생성하는 함수를 따로 만들어서 저장하였습니다.
*/
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {

  // 스토어생성
  const store = createStore(rootReducer, preloadedState);

  /*
      webpack 에서 지원하는 HMR(Hot Module Replacement)
      : app 이 실행되고 있는 상황에서 module을 page refresh 없이 더하고, 빼고, 바꾸어주는 일을 합니다.
  */
 // hot-reloading 을 위한 코드
  if (module.hot) {
    module.hot.accept('../reducers', () => {  
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer) // hot reloading, 코드분할을 위한 메소드
    });
  }

  return store;
}
