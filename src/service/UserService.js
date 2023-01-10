import { Usuario } from "@/model/User";
import http from "./config";

export default {

    add: function(user = new Usuario) {
        console.log(user);
        return http.post("/usuario/add", user);
    },
    list: function (callback) {
            try {
    
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function () {
                    console.log(this.responseText);
                    callback(this.responseText);
                }
                    xhttp.open("GET", "http://localhost:8000/projetos/lojaweb/api/index.php/list", false);
                    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
                    xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
                    xhttp.send();
            } catch (error) {
                alert("Erro ao cadastrar!" + error)
                console.error(error);
            }


        },
        login: function (usuario) {

            return http.post("usuario/login", JSON.stringify(usuario));
        },
        listar: function () {
            return http.get("usuario/list");
        },
       
        
    }
