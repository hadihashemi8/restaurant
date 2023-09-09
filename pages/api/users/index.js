import db from "../../../utils/db"
import User from "../../../models/user"
import { hash } from "bcryptjs"



async function handler(req, res) {
    await db.connect()



    if (req.method === "POST") {


        if (!req.body) return res.status(404).json({ error: "dont have form date" });
        const { fullName, phoneNumber, password, isAdmin } = req.body


        const checkExistingUser = await User.findOne({ phoneNumber })
        if (checkExistingUser) return res.status(422).json({ error: "user already exist..." })


        const usersCount = await User.countDocuments({}).exec()

        console.log(usersCount);

        User.create({ fullName, phoneNumber, password: await hash(password, 12), comments: [], isAdmin: usersCount == 0 ? "ADMIN" : false })
            .then(data => {
                if (data) {
                    res.status(201).json({ status: true, user: data })
                }
            })
            .catch(err => res.status(404).json({ err }))

    } else if (req.method === "GET") {
        const data = await User.find()
            .then(users => {
                if (users) {
                    res.status(201).json({ status: true, data: users })

                }
            }).catch(err => res.status(404).join({ err }))
    } else {
        res.status(500).json({ message: "htttp method not valid only POST Accepted" })
    }


}


export default handler