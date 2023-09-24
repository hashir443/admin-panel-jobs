interface UserProfile {
  mainImageUrl: string;
  coverImageUrl: string;
  name: string;
  lastDesignation?: string;
  followers?: userDetails[];
  following?: userDetails[];
}

interface userDetails {
  id: number,
  name: string,
  imageURL: string,
  lastSeen: string
}

export { UserProfile, userDetails };
