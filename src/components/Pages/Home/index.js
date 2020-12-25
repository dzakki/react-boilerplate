import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { actions } from 'state/slices/users'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(
    state => ({
      userDetail: state.users.detail,
      isLoading: state.users.loading
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(actions.fetchUserById())
    return () => dispatch(actions.clear())
  }, [dispatch])

  return (
    <section className='section'>
      <h1 className='title'>React Boilerplate</h1>
      <p className='subtitle'>{isLoading ? 'Loading...' : 'Done'}</p>
    </section>
  )
}

export default Home
