import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    function findFactorial(n) {
        if (n == 1 || n == 0) {
            return 1
        }
        return n * findFactorial(n-1)
    }

    // Your solution starts here
    const expensiveValue = useMemo(() => {
        const fact = findFactorial(input)
        console.log(fact)
        return fact
    }, [input]); 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}