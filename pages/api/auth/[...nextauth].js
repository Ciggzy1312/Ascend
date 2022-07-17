import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user }) {
        try {

          const user_exist = await prisma.user.findUnique({
            where: {
              email: user.email
            }
          })

          if(!user_exist){
            await prisma.user.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
              }
            });
          }

          return true;
        } catch (error) {
          console.error("Request error", error);
          res.status(500).json({ error: "Error creating question", success:false });
        }
        
    }
  }
});