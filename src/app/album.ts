import { Track } from './track';

export interface Album {
    name: string;
    releaseDat: string;
    coverImage: string;
    tracks: Track[];
}
