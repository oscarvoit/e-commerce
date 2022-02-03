import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const  CheckAuth = ({ Component, pageProps }) => {
  const { data: session, loading } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (loading) return

        if (!session){
          router.push('/auth/signin')
        }
    }, [session, loading])

    if (session){
      return <Component {...pageProps} />
    }
  
  return 'Carregando...'
}

export default CheckAuth