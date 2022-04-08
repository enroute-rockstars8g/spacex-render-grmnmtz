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

export const getDragons = async () => {
  try {
    const response = await fetch('https://api.spacex.land/rest/dragons')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const getRockets = async () => {
  try {
    const response = await fetch('https://api.spacex.land/rest/rockets')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const getCapsules = async () => {
  try {
    const response = await fetch(
      'https://api.spacex.land/rest/capsules?id=&landings=0&mission=string&original_launch=&reuse_count=0&status=string&type=string'
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
