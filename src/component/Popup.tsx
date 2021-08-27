import React, { useEffect, useState } from 'react'
import Row from './base/Row'
import Locale from 'locale/locale'
import '../style/popup.scss'

const $c = Locale('common')

type PopupType = 'popup' | 'alert' | 'confirm'
type AlertButtonClassName = 'second' | 'cancel' | 'mini'

interface AlertButtonModel {
  text?: string
  className?: Array<AlertButtonClassName>
  disabled?: boolean
}

interface IProps {
  type: PopupType
  isShow: boolean
  topCloseButton?: boolean
  title?: string
  topMargin: number
  bottomMargin: number
  negative?: AlertButtonModel
  positive?: AlertButtonModel
  onClickClose?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: JSX.Element
  title_icon?: JSX.Element
  style?: React.CSSProperties
}

const Popup: React.FC<IProps> = ({
  type,
  isShow,
  topCloseButton,
  title,
  topMargin,
  bottomMargin,
  negative,
  positive,
  onClickClose,
  onClick,
  children,
  title_icon,
  style,
}) => {
  const [isRender, setIsRender] = useState<boolean>(isShow)
  const [isVisible, setIsVisible] = useState<boolean>(isShow)

  useEffect(() => {
    setIsRender(isShow)
    setIsVisible(isShow)
  }, [isShow, isRender, isVisible])

  useEffect(() => {
    if (isRender) document.body.style.overflow = 'hidden'
  }, [])
  useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [isVisible])

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <>
      {isRender && (
        <div className={`-alert-wrap ${isVisible ? 'vis' : ''}`}>
          <div className='-alert' onClick={stopPropagation} style={style}>
            <Row
              className='-title-wrap'
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: topMargin ?? 0,
              }}
            >
              <>
                {topCloseButton !== false && (
                  <>
                    <Row>
                      <Row className='-title-row'>
                        <h2 className='-title'>{title ?? ''}</h2>
                        {title_icon ? title_icon : <></>}
                      </Row>
                    </Row>

                    <button type='button' className='-close-wrap' onClick={onClickClose}>
                      <div className='-bar' />
                      <div className='-bar' />
                    </button>
                  </>
                )}
              </>
            </Row>
            <main
              style={{
                marginBottom: bottomMargin ?? 0,
              }}
            >
              {children}
            </main>
            {type !== 'popup' && (
              <Row style={{ alignItems: 'center', justifyContent: 'center' }} className='-btn-wrap'>
                {type === 'confirm' ? (
                  <button
                    type='button'
                    disabled={negative?.disabled ?? false}
                    className={`-negative btn ${negative?.className ? negative.className.join(' ') : ''}`}
                    onClick={onClickClose}
                  >
                    {negative?.text ?? $c('cancel')}
                  </button>
                ) : (
                  <></>
                )}
                <button
                  type='button'
                  disabled={positive?.disabled ?? false}
                  className={`-positive btn ${positive?.className ? positive.className.join(' ') : ''}`}
                  onClick={onClick}
                >
                  {positive?.text ?? $c('confirm')}
                </button>
              </Row>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
