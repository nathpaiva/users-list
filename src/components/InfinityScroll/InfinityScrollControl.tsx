import { useInfinityScroll } from './useInfinityScroll'

export const InfinityScrollControl = ({
  loadingMessage = 'loading',
  dataEndMessage = 'end list',
}: TInfinityScrollControl) => {
  const { isLoading, hasMoreUserToLoad, elementRef } = useInfinityScroll()

  return (
    <>
      {isLoading && <h3>{loadingMessage}</h3>}
      {!isLoading && hasMoreUserToLoad && <div ref={elementRef}>hey</div>}
      {!hasMoreUserToLoad && <h3>{dataEndMessage}</h3>}
    </>
  )
}
