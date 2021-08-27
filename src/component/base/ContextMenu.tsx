import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from 'theme'

const ContextMenuContainer = styled.div<{ maxWidth: string; positionLeft: number; positionTop: number }>`
  position: fixed;
  z-index: 10000;
  max-width: ${(props) => props.maxWidth};
  background: ${theme.color.gray2};
  border-radius: 5px;
  padding: 5px 10px;
  color: ${theme.color.gray7};
  left: ${(props) => `${props.positionLeft}px`};
  top: ${(props) => `${props.positionTop}px`};
  left: 10000;
`
const CopyText = styled.span`
  color: ${theme.fontColor.black};
`

const ToastBody = styled.div<{ positionLeft: number; positionTop: number }>`
  left: ${(props) => `${props.positionLeft}px`};
  top: ${(props) => `${props.positionTop}px`};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 120px;
  margin-bottom: 10px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 16px;
  animation: slide-up 0.2s;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 999999;
`

interface IContextMenuProps {
  maxWidth?: string
  positionLeft: number
  positionTop: number
  content: string
  onClose: () => void
}
const ContextMenu: React.FC<IContextMenuProps> = ({ maxWidth, positionLeft, positionTop, content, onClose }) => {
  let toastTimer: any = null
  const [toastVisible, setToastVisible] = useState(false)
  const [toastPositionX, setToastPositionX] = useState(-10000)
  const [toastPositionY, setToastPositionY] = useState(-10000)

  const handleRightClick = (e: any) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent) => {
    copy(content)
    setToastVisible(true)
    const toastPositionInfo = e.currentTarget.getBoundingClientRect()
    // slide-up
    setToastPositionX(toastPositionInfo.x - toastPositionInfo.width)
    setToastPositionY(toastPositionInfo.y + 25)

    // slide-left
    // setToastPositionX(toastPositionInfo.x + 50)
    // setToastPositionY(toastPositionInfo.y - 25)
    toastTimer = setTimeout(() => {
      setToastVisible(false)
    }, 2000)
  }

  useEffect(() => {
    const scope = document.querySelector('body')
    scope?.addEventListener('click', onClose)

    return () => {
      scope?.removeEventListener('click', onClose)
    }
  }, [])
  const copy = (value: string) => {
    const temp = document.createElement('textarea')
    document.body.appendChild(temp)
    temp.value = value
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
  }

  useEffect(() => {
    document.querySelector('body')?.addEventListener('contextmenu', (e) => handleRightClick(e))
    return () => {
      document.querySelector('body')?.removeEventListener('contextmenu', (e) => handleRightClick(e))
      clearTimeout(toastTimer)
    }
  }, [])
  return (
    <ContextMenuContainer
      maxWidth={maxWidth ? maxWidth : 'max-content'}
      positionLeft={positionLeft}
      positionTop={positionTop}
      onClick={(e: React.MouseEvent) => handleClick(e)}
    >
      {toastVisible ? <ToastBody positionLeft={toastPositionX} positionTop={toastPositionY}>{`copied`}</ToastBody> : <></>}
      <CopyText>{`copy`}</CopyText>
    </ContextMenuContainer>
  )
}

export default ContextMenu
