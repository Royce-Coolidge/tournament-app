import { ADD_PLAYER, RESET, SUBMIT, WINNER } from './action-types'

export const addPlayer = (payload) => ({
    type: ADD_PLAYER,
    payload,
})

export const reset = () => ({
    type: RESET,
})

export const submit = () => ({
    type: SUBMIT,
})

export const winner = (payload) => ({
    type: WINNER,
    payload,
})


