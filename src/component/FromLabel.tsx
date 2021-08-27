import React from 'react'
import Row from './base/Row'
import '../style/form-label.scss'

const FormLabel = ({
  tip_title,
  tip,
  required,
  left_required,
  title,
}: {
  tip_title?: string
  tip?: string
  required?: boolean
  left_required?: boolean
  title: string
}): JSX.Element => {
  const tooltipRenderHelper = (tool_tip: string | undefined) => {
    if (tool_tip) {
      const arr = tool_tip.split('\n')

      return (
        <div className='tooltip-container'>
          {tip_title ? <span className='tooltip-title'>{tip_title}</span> : <></>}
          {arr.map((item, index) => {
            return (
              <span key={index} className='tooltip' style={{ width: 'max-content' }}>
                {item}
              </span>
            )
          })}
        </div>
      )
    }

    return <></>
  }

  return (
    <Row className='form-label'>
      {left_required ? <span className='left_required'>*</span> : <></>}
      <span className='title appleB'>{title}</span>
      {required ? <span className='required'>*</span> : <></>}

      {tip || tip_title ? (
        <Row className='img-holder-tip'>
          <img alt='tip' />
          {tooltipRenderHelper(tip)}
        </Row>
      ) : (
        <></>
      )}
    </Row>
  )
}

export default FormLabel
