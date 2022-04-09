export const DragonCard = ({ dragon }: { dragon: any }) => {
  const classes = {
    dragonContainer: 'bg-gray-800 text-white p-8 m-4 ',
    dragonName: 'text-4xl py-4 text-sky-600 font-bold',
    websiteLink: 'text-blue-300',
  }

  return (
    <div key={dragon.id} className={classes.dragonContainer}>
      <div className={classes.dragonName}>
        <p>{dragon.name}</p>
      </div>
      <p className="py-2">Description:</p>
      <p>{dragon.description}</p>
      <div className="py-4">
        <p>Crew capacity: {dragon.crew_capacity}</p>
        <p>Dry Mass: {dragon.dry_mass_kg} kg</p>
        <p>First Flight: {dragon.first_flight}</p>
        <p>Heat Shield: {dragon.heat_shield?.dev_partner}</p>
        <p>Material:{dragon.heat_shield?.material} </p>
        <p>Size in meters: {dragon.heat_shield?.size_meters} </p>
        <p>Temp in degrees: {dragon.heat_shield?.temp_degrees}</p>
      </div>

      <div className="py-2">Active: {dragon.active.toString()}</div>

      <div>
        <span className="pr-2">
          {' '}
          <a className={classes.websiteLink} href={dragon.wikipedia}>
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  )
}
