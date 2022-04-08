export const MissionCard = ({ mission }: { mission: any }) => {
  return (
    <div key={mission.id} className="bg-gray-800 text-white p-8 m-4 ">
      <div className="text-4xl py-4 font-bold">
        <p>Mission name: {mission.name}</p>
      </div>
      <p>Description: {mission.description}</p>
      <div className="py-4">
        <p className="py-4 text-2xl font-semibold">Manufacturers:</p>
        {mission.manufacturers.map((manufacturer: any) => (
          <p key={`${mission.id}-${manufacturer}`}>{manufacturer}</p>
        ))}
      </div>
      <div>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={mission.twitter}>
            Twitter
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={mission.twitter}>
            Website
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={mission.twitter}>
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  )
}
