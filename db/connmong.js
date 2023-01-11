const mongoose =  require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://vercel-admin-user:L7CGW5RlgUpw0Syb@cluster0.44pt6nv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("Conectado ao BD")
    }catch(error) {
        console.log(error);
    }
}
module.exports = main