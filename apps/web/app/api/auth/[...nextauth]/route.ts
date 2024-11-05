import NextAuth from "next-auth"
import { nextAuthConfig } from "@/entry-point/config/next-auth.config";


const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }