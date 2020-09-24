/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
    <div
        css={css`
      width: 100% ;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 100vh;
      object-fit: contain
    `}
    />
)

export default Slide