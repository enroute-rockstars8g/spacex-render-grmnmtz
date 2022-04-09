import React, { useEffect, useState } from 'react'
import { RocketCard } from '../../components/RocketCard/component'
import { LoadingMessage } from '../../components/LoadingMessage/component'
import { ErrorMessage } from '../../components/ErrorMessage/component'
import { getRockets } from '../../services/spacex'

export const RocketsPage = () => {
  const [rockets, setRockets] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const rocketsData = await getRockets()
        setRockets(rocketsData)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  const mappedRockets = rockets.map((rocket: any) => (
    <RocketCard key={rocket.id} rocket={rocket} />
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
    <div className="flex flex-col max-w-xl">{mappedRockets}</div>
  )
}
