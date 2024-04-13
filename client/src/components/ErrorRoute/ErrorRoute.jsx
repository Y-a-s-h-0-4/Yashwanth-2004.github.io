import React from 'react'
import { Link,useRouteError } from 'react-router-dom'

function ErrorRoute() {

  let routingError=useRouteError()

  return (
    <div>
      <h2 className='text-center text-danger mt-5'>{routingError.status}-{routingError.data}</h2>
      <p className='text-center'><Link to=''>Click here</Link> to go to Home page</p>
    </div>
  )
}

export default ErrorRoute