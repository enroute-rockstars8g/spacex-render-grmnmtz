export const LoadingMessage = () => {
  const classes = {
    loadingMessage:
      'text-4xl flex flex-col items-center m-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4 min-h-screen',
  }
  return (
    <div className={classes.loadingMessage}>
      {/* <p>We are searching for your information.</p> */}
    </div>
  )
}
