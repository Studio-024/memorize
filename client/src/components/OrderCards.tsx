import React, {FC, useState} from 'react';

const Counter = () => {
    interface Count {
        number: number
    }

    const [count, setCount] = useState<Count>({number: 1});

    return (
        <>
        <h1>Ya {count}</h1>
        <button onClick={() => setCount(count)}>...</button>
        </>
        );
}

export default Counter;