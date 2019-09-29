import { ADD_PLAYER, RESET, SUBMIT, SUBMIT_WINNERS } from './action-types'

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

export const submitWinners = () => ({
    type: SUBMIT_WINNERS,
})



