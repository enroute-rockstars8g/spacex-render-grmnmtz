import React, { useEffect, useState } from 'react'
import { DragonCard } from '../../components/DragonCard/component'
import { getDragons } from '../../services/spacex'

export const DragonsPage = () => {
  const [dragons, setDragons] = useState<any>([])

  useEffect(() => {
    async function get() {
      try {
        const dragonsData = await getDragons()
        setDragons(dragonsData)
        console.log(dragonsData)
      } catch (e) {
        console.error(e)
      }
    }
    get()
  }, [])

  const mappedDragons = dragons.map((dragon: any) => {
    return <DragonCard key={dragon.id} dragon={dragon} />
  })

  return (
    <div className="flex flex-col max-w-xl text-white">{mappedDragons}</div>
  )
}
