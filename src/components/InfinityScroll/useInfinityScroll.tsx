import { useEffect, useRef, useState } from 'react'

import { useInfinityScrollContext } from './InfinityScrollProvider'

type TUseInfinityScroll = {
  data: TUserData[]
  isLoading: boolean
  hasMoreUserToLoad: boolean
  setElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
}

export const useInfinityScroll = (): TUseInfinityScroll => {
  const { data, isLoading, hasMoreUserToLoad, loadMoreItems } =
    useInfinityScrollContext()

  const loader = useRef(loadMoreItems)

  useEffect(() => {
    /**
     * to avoid to load the same user data
     */
    loader.current = loadMoreItems
  }, [loadMoreItems])

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        /**
         * get the element which we are observing
         * to whether call the loadMoreItems or not based on the `isIntersecting` key
         */
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting) {
          loader.current()
        }
      },
      { threshold: 1 },
    ),
  )

  /**
   * create the state to use in ref of the element
   * which is observed to update the user data
   * this element could be an empty div
   */
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    /**
     * check if the observer element isn't null
     */
    if (element) {
      observer.current.observe(element)
    }

    return () => {
      if (element) {
        observer.current.unobserve(element)
      }
    }
  }, [element])

  return {
    data,
    isLoading,
    hasMoreUserToLoad,
    setElement,
  }
}
