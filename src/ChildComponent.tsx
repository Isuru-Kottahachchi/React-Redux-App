import React from 'react';

interface ChildProps {

    age: number;
    university: string;
}
//const ChildComponent: React.FC<ChildProps> = ({age,university }) => 
const ChildComponent: React.FC<{ age: number, university: string }> = ({ age, university }) => {
    return (
        <div>
            <h3>Age: {age}</h3>
            <h3> {university}</h3>
        </div>
    );
};

export default ChildComponent;
