import React, { useEffect, useState } from 'react'
import { MissionCard } from '../../components/MissionCard/component'
import { LoadingMessage } from '../../components/LoadingMessage/component'
import { ErrorMessage } from '../../components/ErrorMessage/component'
import { getMissions } from '../../services/spacex'

export const MissionsPage = () => {
  const [missions, setMissions] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const missionsData = await getMissions()
        setMissions(missionsData)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  const mappedMissions = missions.map((mission: any) => (
    <MissionCard key={mission.id} mission={mission} />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 ">
      {mappedMissions}
    </div>
  )
}
