import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const  CheckAuth = ({ Component, pageProps }) => {
  const { data: session, status } = useSession({required: true})
  const router = useRouter()
  const isUser = !!session?.user

  useEffect(() => {
    if (status === 'loading') return

    if (!isUser){
      router.push('/auth/signin')
    }
  }, [isUser, status])

  if (isUser){
    return <Component {...pageProps} />
  }
  
  return 'Carregando...'
}

export default CheckAuth