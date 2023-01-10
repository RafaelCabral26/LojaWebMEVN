const mongoose =  require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://rafael:chKxItwBidbREsQv@cluster0.a6fnsy6.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao BD")
    }catch(error) {
        console.log(error);
    }
}
module.exports = main