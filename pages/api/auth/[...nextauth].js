import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "../../../utils/db"
import User from "../../../models/user"
import bcrypt from "bcryptjs"

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
          

            if (user) {
                return {
                    ...token,
                    id: user._id.toString() ,
                    phoneNumber: user.phoneNumber,
                    isAdmin: user.isAdmin
                }
            }


            return token
        },
        async session({ session, token }) {
           
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id:token.id,
                        phoneNumber: token.phoneNumber,
                        isAdmin:token.isAdmin
                    }
                }
 
        }
    },

    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials) {
                await db.connect()


                // check user 
                const user = await User.findOne({ phoneNumber: credentials.phoneNumber })

                
                // check password
                if (user && bcrypt.compareSync(credentials.password, user.password)) {

                    return {
                        _id: user._id,
                        name: user.fullName,
                        phoneNumber: user.phoneNumber,
                        isAdmin: user.isAdmin,
                        
                    }
                }

                throw new Error("invalid name or password")

            }
        })
    ]
})