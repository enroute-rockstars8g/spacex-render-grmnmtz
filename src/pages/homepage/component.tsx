import React, { useEffect, useState } from 'react'
import { getMissions } from '../../services/spacex'
export const Homepage = () => {
  const [missions, setMissions] = useState<any>([])

  useEffect(() => {
    async function get() {
      try {
        const missionsData = await getMissions()
        setMissions(missionsData)
        console.log(missionsData)
      } catch (e) {
        console.error(e)
      }
    }
    get()
  }, [])

  const mappedMissions = missions.map((mission: any) => {
    return (
      <div key={mission.id} className="bg-gray-900 text-white">
        <p>Mission name: {mission.name}</p>
        <p>Description: {mission.description}</p>
      </div>
    )
  })

  return <div>{mappedMissions}</div>
}
