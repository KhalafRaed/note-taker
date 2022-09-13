import { useMutation } from '@tanstack/react-query'
import customAxios from 'services/http'
import Cookies from 'services/cookies'
import { LoginFormData, LoginResponseData } from 'containers/LoginPage/types'
import { useNavigate } from 'react-router-dom'
import { AxiosErr } from 'types/https.types'
import message from 'antd/lib/message'

export default () => {
  const navigation = useNavigate()
  return useMutation<LoginResponseData, AxiosErr, LoginFormData>(
    (formData) => {
      return customAxios.post('/login', formData)
    },
    {
      onSuccess: (response) => {
        Cookies.set('token', response.token)
        navigation('/')
      },
      onError: (error) => {
        message.error(error.response?.data.message)
      },
    }
  )
}
