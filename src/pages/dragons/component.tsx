import React, { useEffect, useState } from 'react'
import { DragonCard } from '../../components/DragonCard/component'
import { LoadingMessage } from '../../components/LoadingMessage/component'
import { ErrorMessage } from '../../components/ErrorMessage/component'
import { getDragons } from '../../services/spacex'

export const DragonsPage = () => {
  const [dragons, setDragons] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const dragonsData = await getDragons()
        setDragons(dragonsData)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  const mappedDragons = dragons.map((dragon: any) => (
    <DragonCard key={dragon.id} dragon={dragon} />
  ))

  if (isError && !isLoading) {
    return (
      <div>
        <ErrorMessage />
      </div>
    )
  }

  return !isError && isLoading ? (
    <LoadingMessage />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-white">
      {mappedDragons}
    </div>
  )
}
