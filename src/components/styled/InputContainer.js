import styled from 'styled-components'

import { IconContainer } from './IconContainer'

export const InputContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #404040;
  cursor: text;
  display: flex;
  flex: 1;
  flex-direction: columns;
  padding: 1px 16px;
  position: relative;
  transition: 0.23s ease-in-out;
  z-index: 10;

  &:hover {
    background-color: #fafafa;
    border-color: #9b9b9b;
  }

  &:focus-within {
    border-color: #ff7300;
    box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);

    ${IconContainer} {
      color: #ff7300;
    }
  }

  > * {
    cursor: text;
  }
`
