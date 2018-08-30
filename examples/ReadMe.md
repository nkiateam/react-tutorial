
#### 해당예제를 보기 앞서 미리 보시면 좋은 강의 목록입니다.

# React

리액트는 페이스북과 인스타그램 개발자들이 만든 UI 라이브러리입니다. 2013년 처음 공개됐으며 MVC(Model View Controller) 패턴에서 V(View)에 집중되어 있습니다. 뷰에서 사용되는 여러 개의 컴포넌트를 관리하고 만드는 것이 리액트입니다. 컴포넌트는 웹사이트를 구성하고 있는 요소를 의미한다고 생각하면 됩니다. 

즉, 리액트는 여러 개의 컴포넌트를 제작할 수 있고, 이를 조립하고, 수정하고, 재활용을 편리하게 할 수 있도록 만들어진 라이브러리입니다.

또한 커스텀 태그를 지원하고 있어 자주 사용되는 컴포넌트를 본인 만의 태그로 제작하고 재사용할 수 있습니다. 커스텀 태그는 HTML에서 미리 지정한 태그 외에 자신만의 태그를 만들 수 있는 것을 의미합니다.

그리고 Virtual DOM을 제공하여 데이터 변경시 변경된 부분만을 업데이트하여 새로 고침을 하지 않고 바로 확인할 수 있습니다. 덕분에 성능 향상을 볼 수 있다는 장점을 가지고 있습니다.

마지막으로 Angular, Backbone과 다르게 데이터가 단방향으로 흐르고 있습니다. Angular는 양방향으로 상위 컴포넌트에서 하위 컴포넌트 또는 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 수 있습니다. 반대로 리액트는 단방향이기 때문에 상위 컴포넌트에서 하위 컴포넌트로만 데이터 전달이 가능합니다.



# 브라우저의 Workflow

![ex_screenshot](./01-hello-world/image/dom.png)

## DOM Tree 생성
브라우저가 HTML 을 전달받으면, 브라우저의 렌더 엔진이 이를 파싱하고 DOM 노드(Node) 로 이뤄진 트리를 만들어요. 각 노드는 각 HTML 엘리먼트들과 연관되어있죠.

 

## Render Tree 생성
그리고, 외부 CSS 파일과 각 엘리먼트의 inline 스타일을 파싱해요. 스타일 정보를 사용하여 DOM 트리에 따라 새로운 트리, 렌더트리를 만들어요.


## Render Tree 생성 – 그 뒤에선 무슨일이 일어나고 있는가..?
Webkit 에서는 노드의 스타일을 처리하는 과정을 ‘attachment’ 라고 불러요. DOM 트리의 모든 노드들은 ‘attach’ 라는 메소드가 있어요. 이 메소드는 스타일 정보를 계산해서 객체형태로 반환합니다.

이 과정은 동기적(synchronous) 작업이구요, DOM 트리에 새로운 노드가 추가되면 그 노드의 attach 메소드가 실행됩니다.

렌더 트리를 만드는 과정에선, 각 요소들의 스타일이 계산되구요, 또 이 계산되는 과정에서 다른 요소들의 스타일 속성들을 참조합니다.

 
## Layout (reflow 라고도 불립니다)
렌더 트리가 다 만들어지고 나면, 레이아웃 과정을 거쳐요. 각 노드들은 스크린의 좌표가 주어지고, 정확히 어디에 나타나야 할 지 위치가 주어집니다.

 
## Painting
그 다음 작업은 렌더링 된 요소들에 색을 입히는 과정입니다. 트리의 각 노드들을 거쳐가면서 paint() 메소드를 호출해요. 그러고나면, 스크린에 원하는 정보가 나타나는거죠.


# Virtual DOM
자 이제 DOM 을 조작했을 때 어떤 작업이 이뤄지는지 알겠죠? DOM에 변화생기면, 렌더트리를 재생성하고 (그러면 모든 요소들의 스타일이 다시 계산됩니다) 레이아웃을 만들고 페인팅을 하는 과정이 다시 반복되는거죠.

복잡한 SPA(싱글 페이지 어플리케이션) 에서는 DOM 조작이 많이 발생해요. 그 뜻은 그 변화를 적용하기 위해 브라우저가 많이 연산을 해야한단 소리고, 전체적인 프로세스를 비효율적으로 만듭니다.

자, 이 이부분에서 Virtual DOM 이 빛을 발합니다! 만약에 뷰에 변화가 있다면, 그 변화는 실제 DOM 에 적용되기전에 가상의 DOM 에 먼저 적용시키고 그 최종적인 결과를 실제 DOM 으로 전달해줍니다. 이로써, 브라우저 내에서 발생하는 연산의 양을 줄이면서 성능이 개선되는 것 이지요.


### 강의 소개
- React.js 학습 방법 안내
- 최종 학습 목표 안내

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/GEoNiUcVwjE/0.jpg)](https://www.youtube.com/watch?v=fT9iFFAt60E&feature=youtu.be&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)


### 프론트엔드 라이브러리
- 프론트엔드 라이브러리란 무엇인가?

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/H24D0GveBYY/0.jpg)](https://www.youtube.com/watch?v=_aBq1SKl6yQ&index=2&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)


### React.js Virtual DOM
- 리액트의 Virtual DOM

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=wKwMRH0PkMg&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=3)


### React의 특별한점
- 리액트를 특별하게 만드는 점은?

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=aP5rmFZ70js&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=4)