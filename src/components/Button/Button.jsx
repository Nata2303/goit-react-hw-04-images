import React from 'react';
import style from './button.module.css';

const Button = ({ onClick, images }) => {
  if (images.length === 0) {
    return null; // Приховуємо кнопку, якщо images має нульову довжину
  }

  return (
    <button type="button" className={style.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
