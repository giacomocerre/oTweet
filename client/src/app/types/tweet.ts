export interface Tweet {
  id: number;
  author: string;
  message: string;
  date: string; // Formato --> HH:mm - DD/MM/YYYY GMT --> eg: "18:22 - 19/04/2025 GMT"
}

export interface CreateTweetPayload {
  author: string;
  message: string;
}
