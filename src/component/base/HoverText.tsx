import React, { useState } from 'react'
import styled from 'styled-components'
import Locale from 'locale/locale'
import theme from 'theme'
import TipHover2 from '../../static/img/icons/tip-hover2.png'
import FormLabel from 'component/FromLabel'
const $c = Locale('common')

const HoverPad = styled.div`
  width: 100%;
  height: 50px;
  background: ${theme.color.gray4};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const HoverText = () => {
  const [hoverTextX, setHoverTextX] = useState(-10000)
  const [hoverTextY, setHoverTextY] = useState(-10000)
  const [hoverText, setHoverText] = useState<JSX.Element | string>()

  const mouseEnterHandler = (type: 'pad' | 'tip', text: string, e: React.MouseEvent) => {
    setHoverTextX(e.pageX + 20)
    setHoverTextY(e.currentTarget.getBoundingClientRect().y + 20)
    setHoverText(text)
  }

  const mouseLeaveHanlder = (e: React.MouseEvent) => {
    setHoverTextX(-10000)
  }
  return (
    <div>
      <h1>{$c('hover_text')}</h1>
      <HoverPad
        onMouseMove={(e: React.MouseEvent) => mouseEnterHandler('pad', 'Your_hover_text', e)}
        onMouseLeave={(e: React.MouseEvent) => mouseLeaveHanlder(e)}
      >
        Mouse move here
      </HoverPad>
      <img
        onMouseEnter={(e: React.MouseEvent) => mouseEnterHandler('tip', 'Tip_text', e)}
        onMouseLeave={(e: React.MouseEvent) => mouseLeaveHanlder(e)}
        src={TipHover2}
        alt=''
      />
      <FormLabel title={`FormLabel`} tip_title={'aaa'} tip={'asd' + `\n` + 'asdsa'} />
      <div className='f-hover-text' style={{ left: hoverTextX, top: hoverTextY }}>
        {hoverText}
      </div>
    </div>
  )
}

export default HoverText
