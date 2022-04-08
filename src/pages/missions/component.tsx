import React, { useEffect, useState } from 'react'
import { MissionCard } from '../../components/MissionCard/component'
import { getMissions } from '../../services/spacex'

export const MissionsPage = () => {
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
    return <MissionCard key={mission.id} mission={mission} />
  })

  return <div className="flex flex-col max-w-xl">{mappedMissions}</div>
}
