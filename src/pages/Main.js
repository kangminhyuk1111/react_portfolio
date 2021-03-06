import React, { useState, useEffect } from 'react'
import '../css/main.css';
import profile from '../images/profile.jpg';

export default function Main(props) {
    const [classNames, setClassNames] = useState('good');
    return (
        <div className={`top_main`}>
            <div className={`main ${props.mode}`}>
                <div className={`main_inner ${props.mode} ${classNames}`}>
                    <div className={`main_left ${props.mode}`}>
                        <div className='main_inner_summary'>
                            <div className={`main_inner_top ${props.mode}`}>
                                <p className='inner_top_icon'>π¨βπ»</p>
                                <p className='top_p_2'>λΉ λ₯΄κ² λ°λλ νΈλ λ μ μ¬μ©μλ€μ λ λμ κ²½νμ μν΄ λΈλ ₯νλ</p>
                                <p className='top_p_2'><span className='top_p_1'>FRONTEND DEVELOPER κ°λ―Όν</span>μλλ€.</p>
                            </div>
                            <p className='inner_p'>μ»΄ν¨ν° μΈμ΄λ₯Ό μ¬μ©ν΄ κ΅¬ννκ³ μ νλ νλ‘κ·Έλ¨μ΄ μκ°νλλ λ§€λ ₯μ λΉ μ Έ κ°λ°μκ° λκ³  μΆμ΅λλ€. </p>
                            <p className='inner_p'>
                                μ¬μ©μμ μμ₯μμ λλΌλ μ’μ μλΉμ€κ° λ¬΄μμΈμ§ λ€μν κ΄μ μμ κ³ λ―Όνκ³ , λ€μν κ°λ°μλΆλ€κ³Ό ν¨κ» μ λ³΄λ₯Ό κ³΅μ νλ©° μ κ° κ°μ§ λ₯λ ₯μ μ κ·Ήμ μΌλ‘ μ±μ₯μμΌ°μ΅λλ€.</p>
                            <p className='inner_p_1'>μ§μ·¨μ μ΄λ©° λ₯λμ μΌλ‘ μλ¬΄μ μνλ κ°λ°μκ°λκ² μ΅λλ€.</p>
                            <p className='myinfo_links'>π§<a href='#'>rkdglqkr12@naver.com</a></p>
                            <p className='myinfo_links'>π±<a href='#'>Blog</a></p>
                            <p className='myinfo_links'>π<a href='#'>Github</a></p>
                        </div>
                    </div>
                    <div className='main_right'>
                        <div className='right_right'>
                            <img src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
