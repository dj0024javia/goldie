/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Arrow = ({ direction, handleClick }) => (
    <div
        onClick={handleClick}
        css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateY(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
    >
        {direction === 'right' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </div>
)

export default Arrow
