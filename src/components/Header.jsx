import React from 'react';
import style from '../style/Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.left_box}>
        <img className={style.logo}
          src='../../public/logo.png'
          alt=''
        />
        <span className={style.r_box}>React</span>
      </div>
      <div className={style.right_box}>
        <img src="../../public/问号.png" alt="" />
        <span>admin</span>
      </div>
    </header>
  );
}
