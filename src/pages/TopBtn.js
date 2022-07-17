import React from 'react';
import '../css/card.css';

export default function TopBtn() {
    const scrollTopBtn = () => {
        if(window.scrollY >= 0){
            window.scroll(0, 0)
        }
    }

    return (
        <div className='top_btn' onClick={() => { scrollTopBtn() }}>
            !
        </div>
    )
}
