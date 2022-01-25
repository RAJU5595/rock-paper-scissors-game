import {Component} from 'react'
import ReactPopUp from './components/ReactPopUp'
import {
  HomeBgContainer,
  ScoreViewContainer,
  ScoreContainer,
  GameResultCard,
  GameResultLogoContainer,
  BtnElement,
  PlayAgainBtn,
  ParagraphElement,
  HeadingElement,
  ChoiceLogo,
  ChoiceContainer,
  ChoiceContainer2,
  ChoiceImage,
  ChoiceImage2,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStatusConstants = {
  playing: 'PLAYING',
  win: 'YOU WIN',
  loose: 'YOU LOOSE',
  draw: 'IT IS DRAW',
}

class App extends Component {
  state = {
    score: 0,
    yourChoice: '',
    opponentChoice: '',
    gameStatus: gameStatusConstants.playing,
    yourChoiceImageUrl: '',
    opponentChoiceImageUrl: '',
  }

  onChoose = choice => {
    const {id, ImageUrl} = choice
    this.setState(
      {yourChoice: id, yourChoiceImageUrl: ImageUrl},
      this.getOpponentChoice,
    )
  }

  getGameResult = () => {
    const {yourChoice, opponentChoice} = this.state
    if (yourChoice === 'ROCK') {
      if (opponentChoice === 'ROCK') {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.loose,
        }))
      }
    } else if (yourChoice === 'PAPER') {
      if (opponentChoice === 'PAPER') {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.loose,
        }))
      }
    } else if (yourChoice === 'SCISSORS') {
      if (opponentChoice === 'SCISSORS') {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.loose,
        }))
      }
    }
  }

  getOpponentChoice = () => {
    const maxLimit = choicesList.length
    const opponentId = Math.floor(Math.random() * maxLimit)
    const opponentChoice = choicesList[opponentId].id
    const opponentChoiceImageUrl = choicesList[opponentId].imageUrl
    this.setState({opponentChoice, opponentChoiceImageUrl}, this.getGameResult)
  }

  renderPlayingGame = () => {
    const onClickRockImage = () =>
      this.onChoose({id: choicesList[0].id, ImageUrl: choicesList[0].imageUrl})
    const onClickScissorsImage = () =>
      this.onChoose({id: choicesList[1].id, ImageUrl: choicesList[1].imageUrl})
    const onClickPapersImage = () =>
      this.onChoose({id: choicesList[2].id, ImageUrl: choicesList[2].imageUrl})
    return (
      <ChoiceContainer>
        <ChoiceContainer2>
          <BtnElement
            onClick={onClickRockImage}
            type="button"
            data-testid="rockButton"
          >
            <ChoiceImage
              alt={choicesList[0].id}
              src={choicesList[0].imageUrl}
            />
          </BtnElement>
          <BtnElement
            onClick={onClickScissorsImage}
            type="button"
            data-testid="scissorsButton"
          >
            <ChoiceImage
              alt={choicesList[1].id}
              src={choicesList[1].imageUrl}
            />
          </BtnElement>
        </ChoiceContainer2>
        <BtnElement
          onClick={onClickPapersImage}
          type="button"
          data-testid="paperButton"
        >
          <ChoiceImage2 alt={choicesList[2].id} src={choicesList[2].imageUrl} />
        </BtnElement>
      </ChoiceContainer>
    )
  }

  playTheGameAgain = () => {
    this.setState({gameStatus: gameStatusConstants.playing})
  }

  renderGameResultView = () => {
    const {gameStatus, yourChoiceImageUrl, opponentChoiceImageUrl} = this.state
    const getTheGameStatusText = () => {
      switch (gameStatus) {
        case gameStatusConstants.win:
          return 'YOU WON'
        case gameStatusConstants.loose:
          return 'YOU LOSE'
        case gameStatusConstants.draw:
          return 'IT IS DRAW'
        default:
          return null
      }
    }

    return (
      <GameResultCard>
        <GameResultLogoContainer>
          <div>
            <ParagraphElement>YOU</ParagraphElement>
            <ChoiceLogo alt="your choice" src={yourChoiceImageUrl} />
          </div>
          <div>
            <ParagraphElement>OPPONENT</ParagraphElement>
            <ChoiceLogo alt="opponent choice" src={opponentChoiceImageUrl} />
          </div>
        </GameResultLogoContainer>
        <ParagraphElement>{getTheGameStatusText()}</ParagraphElement>
        <PlayAgainBtn type="button" onClick={this.playTheGameAgain}>
          PLAY AGAIN
        </PlayAgainBtn>
      </GameResultCard>
    )
  }

  renderGameResult = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.playing:
        return this.renderPlayingGame()
      case gameStatusConstants.win:
        return this.renderGameResultView()
      case gameStatusConstants.draw:
        return this.renderGameResultView()
      case gameStatusConstants.loose:
        return this.renderGameResultView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <HomeBgContainer>
        <ScoreViewContainer>
          <HeadingElement>Rock Paper Scissors</HeadingElement>
          <ScoreContainer>
            <p>Score</p>
            <ParagraphElement>{score}</ParagraphElement>
          </ScoreContainer>
        </ScoreViewContainer>
        {this.renderGameResult()}
        <ReactPopUp />
      </HomeBgContainer>
    )
  }
}

export default App
