import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        )
    }
}

MyName.defaultProps = {
    name: '홍길동'
}
export default MyName;