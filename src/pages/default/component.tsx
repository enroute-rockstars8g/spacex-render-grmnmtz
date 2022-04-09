export const DefaultPage = () => {
  const classes = {
    defaultContainer:
      'min-h-screen text-4xl flex flex-col m-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-sky-800 mt-4 p-12',
    author: 'text-right m-4',
    paragraph: 'text-2xl mt-12',
  }

  return (
    <div className={classes.defaultContainer}>
      <p>
        “You want to wake up in the morning and think the future is going to be
        great - and that's what being a spacefaring civilization is all about.
        It's about believing in the future and thinking that the future will be
        better than the past. And I can't think of anything more exciting than
        going out there and being among the stars.”
      </p>
      <p className={classes.author}>-Elon Musk</p>
      <div className={classes.paragraph}>
        To find more information about SpaceX, select one of the options from
        the nav menu.
      </div>
    </div>
  )
}
