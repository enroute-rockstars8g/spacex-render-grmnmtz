import React, { useEffect, useState } from 'react'
import { RocketCard } from '../../components/RocketCard/component'
import { getRockets } from '../../services/spacex'

export const RocketsPage = () => {
  const [rockets, setRockets] = useState<any>([])

  useEffect(() => {
    async function get() {
      try {
        const rocketsData = await getRockets()
        setRockets(rocketsData)
        console.log(rocketsData)
      } catch (e) {
        console.error(e)
      }
    }
    get()
  }, [])

  console.log(rockets)

  const mappedRockets = rockets.map((rocket: any) => {
    return <RocketCard key={rocket.id} rocket={rocket} />
  })

  return <div className="flex flex-col max-w-xl">{mappedRockets}</div>
}
