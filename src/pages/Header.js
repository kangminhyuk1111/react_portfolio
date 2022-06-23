import React from 'react'
import '../css/header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='top'>
                <div className='header_left'>
                    <i class="fa-solid fa-laptop"></i>
                </div>
                <div className='header_center'>
                    <ul>
                        <li><a href='#'>ABOUT ME</a></li>
                        <li><a href='#'>ABOUT ME</a></li>
                        <li><a href='#'>ABOUT ME</a></li>
                        <li><a href='#'>ABOUT ME</a></li>
                    </ul>
                </div>
                <div className='header_right'>
                    right
                </div>
            </div>
        </div>
    )
}
