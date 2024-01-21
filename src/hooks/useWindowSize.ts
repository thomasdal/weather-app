import { useState, useEffect } from "react";

const useWindowSize = () => {
    // State for window size
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            // Set window size
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

export default useWindowSize;
