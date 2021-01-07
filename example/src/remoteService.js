const BASE_URL = 'https://rickandmortyapi.com/api/character'

export default {
  getRemoteCharacters: async (name) => {
    name = String(name).toLowerCase().trim()
    const response = await fetch(`${BASE_URL}?name=${name}`)
    return response.json()
  }
}
