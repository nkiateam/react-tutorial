import React from 'react';

const About = ({ match }) => {
    return (
        <div>
            {match.params.name === 'testParameter' ? (<h1>About - Parameter : {match.params.name} </h1>)
                                                   : (<h1>About - Parameter : 없음 </h1>) }

        </div>
    );
};

export default About;