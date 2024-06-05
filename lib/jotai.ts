import { Song } from '@/types'
import { atom } from 'jotai'

export const songDetail = atom<Song | null>(null)
