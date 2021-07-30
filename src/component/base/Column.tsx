import React from 'react'

const Col = ({ className, children, style }: { className?: string; children: JSX.Element | JSX.Element[]; style?: React.CSSProperties }) => {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {children}
    </div>
  )
}

export default Col
