export const ErrorMessage = () => {
  const classes = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 m-4 min-h-screen',
  }

  return (
    <div className={classes.errorMessage}>
      <p>There was an error while trying to get the information.</p>
      <p>Please try again</p>
    </div>
  )
}
