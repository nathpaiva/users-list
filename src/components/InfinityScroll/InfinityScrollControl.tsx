import React from 'react'

import { useInfinityScroll } from './useInfinityScroll'

export const InfinityScrollControl: React.FC<TInfinityScrollControl> = ({
  loadingMessage = 'loading',
  dataEndMessage = 'end list',
}) => {
  const { isLoading, hasMoreUserToLoad, setElement } = useInfinityScroll()

  return (
    <>
      {isLoading && <h3>{loadingMessage}</h3>}
      {!isLoading && hasMoreUserToLoad && <div ref={setElement} />}
      {!hasMoreUserToLoad && <h3>{dataEndMessage}</h3>}
    </>
  )
}
