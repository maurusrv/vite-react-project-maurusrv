import { useEffect } from 'react'


const Fetch = () => {
  useEffect(() => {
    const login = async () => {
      const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in', {
        method: 'POST',
        headers: {        
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "batch30_api@avionschool.com",
          password: "batch30"
        })
      })
  
      const data = await response.json()
      console.log(response.headers)
  
      console.log({
        data,
      })
    }

    login()
  }, [])

  return (
    <>hello</>
  )
}

export default Fetch
