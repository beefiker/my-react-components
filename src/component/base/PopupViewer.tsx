import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Popup from 'component/Popup'
import Col from './Column'
import Row from './Row'
import Locale from 'locale/locale'
import theme from 'theme'

const $c = Locale('common')

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.color.gray4};
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${theme.color.gray0};
  }
  .button {
    color: ${theme.color.gray9};
  }
`

const PopupViewer = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false)

  const changeVisible = () => {
    setPopupVisible(!popupVisible)
  }

  return (
    <div>
      <Row>
        <Col>
          <ButtonContainer className='button-wrap'>
            <button className='button appleB' onClick={() => changeVisible()}>
              {$c('show_popup')}
            </button>
          </ButtonContainer>
          <Popup
            type='popup'
            topCloseButton={true}
            isShow={popupVisible}
            topMargin={5}
            bottomMargin={5}
            onClickClose={() => {
              setPopupVisible(false)
              console.log('a')
            }}
            onClick={() => {
              setPopupVisible(false)
            }}
          >
            <Col>
              <Row style={{ justifyContent: 'center' }}>
                <span className='title'>Yo, this is the popup that you need</span>
              </Row>
              <Col>
                <span>Popup inner text line 1</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sit ea in quisquam. Beatae, amet?</span>
              </Col>
              <Row className='button-wrap' style={{ marginTop: '50px' }}>
                <a onClick={() => changeVisible()} className='button cancel'>
                  Close
                </a>
                <a onClick={() => changeVisible()} className='button submit'>
                  OK
                </a>
              </Row>
            </Col>
          </Popup>
        </Col>
      </Row>
    </div>
  )
}

export default PopupViewer
