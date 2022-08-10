import SpotifyProvider from "next-auth/providers/spotify";
import NextAuth from "next-auth"

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
      SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID!,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
        authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,user-top-read',
      })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
})
