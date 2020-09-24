/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const SliderContent = props => (
  <div
    css={css`
      transform: translateY(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      width: 100%;
      object-fit: contain;
      height: ${props.height}px;
      display: flex;
      flex-wrap: wrap;
      
    `}
  >
    {props.children}
  </div>
)

export default SliderContent