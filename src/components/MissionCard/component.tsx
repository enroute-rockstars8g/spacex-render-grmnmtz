export const MissionCard = ({ mission }: { mission: any }) => {
  const classes = {
    missionContainer: 'bg-gray-800 text-white p-8 m-4 ',
    titleContainer: 'text-4xl py-4 font-bold',
    missionName: 'text-sky-600',
    manufacturer: 'py-4 text-2xl font-bold',
    websiteLink: 'text-blue-300',
  }

  return (
    <div key={mission.id} className={classes.missionContainer}>
      <div className={classes.titleContainer}>
        <p className={classes.missionName}>{mission.name}</p>
      </div>
      <p>Description: {mission.description}</p>
      <div className="py-4">
        <p className={classes.manufacturer}>Manufacturers:</p>
        {mission.manufacturers.map((manufacturer: any) => (
          <p key={`${mission.id}-${manufacturer}`}>{manufacturer}</p>
        ))}
      </div>
      <div>
        <span className="pr-2">
          {' '}
          <a className={classes.websiteLink} href={mission.twitter}>
            Twitter
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className={classes.websiteLink} href={mission.twitter}>
            Website
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className={classes.websiteLink} href={mission.twitter}>
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  )
}
