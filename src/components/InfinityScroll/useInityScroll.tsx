import { useEffect, useRef, useState } from 'react'

import { useInfinityScrollContext } from './InfinityScrollProvider'

export const useInfinityScroll = () => {
  const { data, isLoading, hasMoreUserToLoad, loadDataChunk } =
    useInfinityScrollContext()

  const loader = useRef(loadDataChunk)

  useEffect(() => {
    loader.current = loadDataChunk
  }, [loadDataChunk])

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting) {
          loader.current()
        }
      },
      { threshold: 1 },
    ),
  )

  //Set a ref using a callback.
  //This is used in conjunction with <div ref={setElement}></div>,
  //which is an empty div that is observed.
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    //Wrap in if statement to avoid observing null.
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
