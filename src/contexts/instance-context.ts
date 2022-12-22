import { createContext, useContext } from 'react'

import { instanceData } from '../data/en'
import { Instance } from '../gql/graphql'

export interface InstanceData {
  lang: Instance
  strings: typeof instanceData['strings']
}
export const InstanceDataContext = createContext<InstanceData | null>(null)

export const InstanceDataProvider = InstanceDataContext.Provider

export function useInstanceData() {
  const data = useContext(InstanceDataContext)
  if (!data) {
    throw new Error('Attempt to use instance data outside of provider!')
  }
  return data
}
