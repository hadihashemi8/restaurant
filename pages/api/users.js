import db from "../../utils/db"
import User from "../../models/user"
import { hash } from "bcryptjs"



async function handler(req, res) {
    await db.connect()

    if (req.method === "POST") {

        

        if (!req.body) return res.status(404).json({ error: "dont have form date" });
        const { fullName, phoneNumber, password, isAdmin } = req.body


        const checkExistingUser = await User.findOne({ phoneNumber })
        if (checkExistingUser) return res.status(422).json({ error: "user already exist..." })


        User.create({ fullName, phoneNumber, password: await hash(password,12), isAdmin })
            .then(data => {
                if (data) {
                    res.status(201).json({ status: true, user: data })
                }
            })
            .catch(err => res.status(404).json({ err }))

    } else {
        res.status(500).json({ message: "htttp method not valid only POST Accepted" })
    }


}

export default handler