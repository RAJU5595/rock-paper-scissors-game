import styled from 'styled-components'

export const BtnElement = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PlayAgainBtn = styled.button`
  padding: 5px;
`
export const ParagraphElement = styled.p`
  font-family: 'Roboto';
`

export const HeadingElement = styled.h1`
  width: 30%;
`
export const HomeBgContainer = styled.div`
  height: 100vh;
  padding: 30px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`
export const ScoreViewContainer = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid #ffffff;
  border-radius: 15px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    min-width: 65%;
  }
  @media (max-width: 767px) {
    min-width: 95%;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  display: flex;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  align-items: center;
`
export const GameResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  color: #ffffff;
  @media (min-width: 768px) {
    max-width: 65%;
  }
  @media (max-width: 767px) {
    max-width: 95%;
  }
`
export const GameResultLogoContainer = styled.div`
  display: flex;
  text-align: center;
`
export const ChoiceLogo = styled.img`
  width: 50%;
`

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    max-width: 75%;
  }
  @media (min-width: 768px) {
    max-width: 70%;
  }
`

export const ChoiceContainer2 = styled.div`
  display: flex;
`
export const ChoiceImage = styled.img`
  width: 50%;
`
export const ChoiceImage2 = styled.img`
  width: 25%;
`
