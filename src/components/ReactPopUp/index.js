import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupBgContainer,
  CloseBtn,
  RulesBtn,
  PopupContainer,
  PopupImage,
} from './styledComponents'

const ReactPopUp = () => (
  <PopupBgContainer>
    <Popup modal trigger={<RulesBtn type="button">RULES</RulesBtn>}>
      {close => (
        <PopupContainer>
          <CloseBtn type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseBtn>
          <div>
            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </PopupContainer>
      )}
    </Popup>
  </PopupBgContainer>
)
export default ReactPopUp
