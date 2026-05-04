import * as adEngine from './ad-engine'

const API = {
  motionNet: { adEngine },
}

function createUseQuery<T>(_def: T): unknown {
  return null
}

export const useMetaAssetsTeamQuery = createUseQuery(
  API.motionNet.adEngine.getMetaAssetsTeam
)
