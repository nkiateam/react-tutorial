import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        team: '',
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
    }
}

export default Form;
