import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
