interface AlbumShared {
  title: string;
  description?: string;
  viewCount: number;
  thumbnail?: string;
  heartCount: number;
  createdDatetime: string;
  id: number;
}
interface AlbumVideo {
  albumShared : AlbumShared[]
  videoURL: string;
}

export { AlbumVideo, AlbumShared }
