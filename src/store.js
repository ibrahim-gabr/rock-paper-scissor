import { writable } from 'svelte/store'


let selectedImage
export const playerSelected = writable(selectedImage)