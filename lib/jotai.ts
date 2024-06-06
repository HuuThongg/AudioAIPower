
import { AudioProps, Song } from '@/types'
import { atom, createStore, useAtomValue, useSetAtom } from 'jotai'
const playlistAtom = atom<Song[]>([])
const currentAudioAtom = atom<AudioProps | null>(null)
const songDetail = atom<Song | null>(null)
export {
  playlistAtom,
  currentAudioAtom,
  songDetail,
}
