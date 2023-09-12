import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Dashboard = (props) => {
  const { user } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])

  return (
    <div>Welcome {user?.username || ''}!</div>
  )
}

export default Dashboard
