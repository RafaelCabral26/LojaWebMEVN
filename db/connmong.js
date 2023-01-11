const mongoose =  require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://rafaelmevn:LmJCiMJll3vaUC2n3@cluster0.44pt6nv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("Conectado ao BD")
    }catch(error) {
        console.log(error);
    }
}
module.exports = main