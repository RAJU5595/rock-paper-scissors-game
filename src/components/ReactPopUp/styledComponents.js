import styled from 'styled-components'

export const PopupBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    min-width: 65%;
  }
  @media (max-width: 767px) {
    min-width: 95%;
  }
`
export const RulesBtn = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
`
export const PopupContainer = styled.div`
  display: flex;
  width: 50vw;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #ffffff;
  @media (min-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 767px) {
    padding: 40px;
  }
`

export const CloseBtn = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
`

export const PopupImage = styled.img`
  width: 90%;
  height: 90%;
`
