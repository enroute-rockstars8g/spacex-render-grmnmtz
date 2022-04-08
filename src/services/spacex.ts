export const getMissions = async () => {
  try {
    const response = await fetch(
      'https://api.spacex.land/rest/missions?id=&manufacturer=string&name=string&payload_id=string'
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
