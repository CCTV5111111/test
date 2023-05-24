import React, { useState, useEffect } from 'react';
import style from '../style/Main.module.css';
import { Button } from 'antd';

export default function Main({ currentMenu, onSaveText }) {
  const [val, setVal] = useState(currentMenu);
  const handleClick = () => {
    onSaveText(val);
  };

  useEffect(() => {
    setVal(currentMenu);
  }, [currentMenu]);

  return (
    <div className={style.box}>
      <input
        type='text'
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button
        type='primary'
        onClick={handleClick}>
        保存
      </Button>
    </div>
  );
}
