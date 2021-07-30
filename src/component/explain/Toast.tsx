import { toast } from 'component/base/toast-manager'
import React from 'react'

const Toast = () => {
  const showToast = () => {
    toast.show({ duration: 2000, content: 'show toast' })
  }
  return (
    <div>
      <h1>Toast</h1>
      <button onClick={showToast}>show toast</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque laborum delectus molestiae voluptates eligendi dolore. Vel
        amet ut autem minima beatae! Modi, exercitationem in facere fuga officia quaerat voluptatum sed impedit. Vero dolore repellat, quidem delectus
        reprehenderit error animi!
      </p>
    </div>
  )
}

export default Toast
