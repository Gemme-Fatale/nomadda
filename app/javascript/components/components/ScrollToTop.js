import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

    return (
        <div>
            {isVisible && (
            <Button className='to-top-button' onClick={scrollToTop}>Back to top</Button>)}
        </div>
    )
}