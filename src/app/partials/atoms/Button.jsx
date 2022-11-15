import React from 'react'
import styled from '@emotion/styled/types/base'

const ButtonContainer = styled.button``

const Button = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}

export default Button
