import { toast } from 'component/base/toast-manager'
import React, { useState } from 'react'

const Toast = () => {
  const [content, setContent] = useState('')
  const showToast = () => {
    toast.show({ duration: 2000, content: content })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>Toast</h1>
      <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit(e)}>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
        <button onClick={showToast}>show toast</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque laborum delectus molestiae voluptates eligendi dolore. Vel
        amet ut autem minima beatae! Modi, exercitationem in facere fuga officia quaerat voluptatum sed impedit. Vero dolore repellat, quidem delectus
        reprehenderit error animi!
      </p>
    </div>
  )
}

export default Toast
