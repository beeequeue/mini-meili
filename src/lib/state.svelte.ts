import { create, type Immutable } from "mutative"

type State = {
  meiliApiKey: string | null
  meiliHost: string
  isLoading: boolean
}

let current = $state<Immutable<State>>({
  meiliApiKey: null,
  meiliHost: `${window.location.protocol}//${window.location.hostname}:7700`,
  isLoading: false,
})

const update = <Key extends keyof State>(key: Key, value: State[Key]) => {
  current = create(current, (draft) => {
    draft[key] = value
  })
}

export const state = {
  current,
  update,
} as const
