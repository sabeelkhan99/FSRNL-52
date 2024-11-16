import React, {useState, useEffect} from 'react'

const EffectDemo = () => {
    const [count, setCount] = useState(0);
    const [isHappy, setIsHappy] = useState(false);

    useEffect(() => {
        console.log('effect without dependency array'); 
    });

    // This got executed just after the first render
    useEffect(() => {
        console.log('effect with empty dependency array'); 
    }, []);

    useEffect(() => {
        console.log('effect with <count> inside dependency array'); 
    }, [count]);

    useEffect(() => {
        console.log('effect with <isHappy> inside dependency array'); 
    }, [isHappy]);

    return (
        <div>ProductList
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment++</button>
            <h2>Happy State : { isHappy ? '😃': '😢'}</h2>
            <button onClick={()=> setIsHappy(!isHappy)}>Toggle Happy</button>
      </div>
    )
}

export default EffectDemo