import React from 'react'

const Row = ({
  children,
  className,
  style,
  onClick,
}: {
  children?: JSX.Element | JSX.Element[]
  className?: string
  style?: React.CSSProperties
  ref?: React.MutableRefObject<any>
  onClick?: React.MouseEventHandler<HTMLDivElement>
}) => {
  const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div className={className} onClick={_onClick} style={{ display: 'flex', flexDirection: 'row', ...style }}>
      {children}
    </div>
  )
}

export default Row
