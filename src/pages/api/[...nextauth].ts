import SpotifyProvider from "next-auth/providers/spotify";
import NextAuth from "next-auth"

export default NextAuth({
  providers: [
      SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        scope: "user-read-email user-top-read",
      })
  ]
})
