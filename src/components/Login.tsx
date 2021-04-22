import { signIn, signOut, useSession } from 'next-auth/client'

import loginStyles from '../styles/Login.module.css'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn('auth0')} className={loginStyles.button}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()} className={loginStyles.button}>Sign out</button>
    </>}
  </>
}