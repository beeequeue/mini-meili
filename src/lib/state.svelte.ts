import { create, type Immutable } from "mutative"

type State = {
  isLoading: boolean
}

let current = $state<Immutable<State>>({
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
