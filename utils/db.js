import mongoose from "mongoose"


async function connect() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/restaurant')
    await mongoose.connect('mongodb://root:LUC6mhxSq7Un3JfltpHDLrJe@robin.iran.liara.ir:32309/my-app?authSource=admin')
   


    console.log('Connected!');
}


function convertToObj(doc) {
    doc._id = doc._id.toString()
    doc.createdAt = doc.createdAt.toString()
    doc.updatedAt = doc.updatedAt.toString()

    console.log(doc);
    return doc
}

const db = { connect, convertToObj }
export default db



