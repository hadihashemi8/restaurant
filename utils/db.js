import mongoose from "mongoose"


async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/restaurant')

    console.log('Connected!');
}


function convertToObj(doc) {
   const id = doc._id.toString()

    return id
}

const db = { connect, convertToObj }
export default db



