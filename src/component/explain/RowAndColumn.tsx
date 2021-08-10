import Col from 'component/base/Column'
import Row from 'component/base/Row'
import React from 'react'

const RowAndColumn = () => {
  return (
    <div>
      <h1>Row and Column</h1>
      <Row>
        <span>row</span>
        <span>row</span>
        <span>row</span>
      </Row>
      <br />
      <Col>
        <span>col</span>
        <span>col</span>
        <span>col</span>
      </Col>
    </div>
  )
}

export default RowAndColumn
