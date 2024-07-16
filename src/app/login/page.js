import React from 'react'
import dynamic from 'next/dynamic'

const ImagesComponent = dynamic(()=> import ("@/components/Images"))

const Login = () => {
  return (<>
    <div>Login page</div>
    <ImagesComponent/>
</>
  )
}

export default Login