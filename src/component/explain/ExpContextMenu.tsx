import ContextMenu from 'component/base/ContextMenu'
import React, { useState, useEffect } from 'react'

const ExpContextMenu = () => {
  const [contextMenuText, setContextMenuText] = useState('')
  const [contextMenuX, setContextMenuX] = useState(-10000)
  const [contextMenuY, setContextMenuY] = useState(-10000)

  const handleClose = () => {
    setContextMenuX(-10000)
    setContextMenuY(-10000)
  }

  const handleContextMenu = (e: React.MouseEvent, value: string) => {
    e.preventDefault()
    setContextMenuX(e.pageX + 10)
    setContextMenuY(e.currentTarget.getBoundingClientRect().y + 10)
    setContextMenuText(value)
  }

  return (
    <div>
      <span onContextMenu={(e: React.MouseEvent) => handleContextMenu(e, 'test value')}>RightClick here</span>
      <ContextMenu positionLeft={contextMenuX} positionTop={contextMenuY} content={contextMenuText} onClose={handleClose} />
    </div>
  )
}

export default ExpContextMenu
