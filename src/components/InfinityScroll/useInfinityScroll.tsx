import { type Ref, useContext, useEffect, useRef } from 'react'

import { InfinityScrollContext } from './InfinityScrollContext'

type TUseInfinityScroll = {
  data: TUserData[]
  isLoading: boolean
  hasMoreUserToLoad: boolean
  elementRef: Ref<HTMLDivElement>
}

export const useInfinityScroll = (): TUseInfinityScroll => {
  const { data, isLoading, hasMoreUserToLoad, loadMoreItems } = useContext(
    InfinityScrollContext,
  )

  const loader = useRef(loadMoreItems)

  // TODO change this approach
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackObserver = ([entry]: IntersectionObserverEntry[]) => {
    /**
     * get the element which we are observing
     * to whether call the loadMoreItems or not based on the `isIntersecting` key
     */
    if (entry.isIntersecting) {
      loader.current()
    }
  }

  useEffect(() => {
    /**
     * to avoid to load the same user data
     */
    loader.current = loadMoreItems
  }, [loadMoreItems])

  /**
   * create the state to use in ref of the element
   * which is observed to update the user data
   * this element could be an empty div
   */
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let observerRefValue: HTMLDivElement | null = null
    const observer = new IntersectionObserver(callbackObserver, {
      threshold: 1,
    })

    /**
     * check if the observer element isn't null
     */
    if (elementRef.current) {
      observer.observe(elementRef.current)
      observerRefValue = elementRef.current
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [elementRef, callbackObserver])

  return {
    data,
    isLoading,
    hasMoreUserToLoad,
    elementRef,
  }
}
