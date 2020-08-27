import { writable } from 'svelte/store'


let yourScore = 0
export const playerScore = writable(yourScore)