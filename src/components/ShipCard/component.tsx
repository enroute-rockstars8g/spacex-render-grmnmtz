export const ShipCard = ({ ship }: { ship: any }) => {
  return (
    <div key={ship.id} className="bg-gray-800 text-white p-8 m-4 ">
      <div className="text-4xl py-4 font-bold">
        <p>ship name: {ship.name}</p>
      </div>
      <p>Description: {ship.description}</p>
      <div className="py-4">
        <p className="py-4 text-2xl font-semibold">Manufacturers:</p>
        {ship.manufacturers.map((manufacturer: any) => (
          <p key={`${ship.id}-${manufacturer}`}>{manufacturer}</p>
        ))}
      </div>
      <div>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={ship.twitter}>
            Twitter
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={ship.twitter}>
            Website
          </a>
        </span>
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={ship.twitter}>
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  )
}
