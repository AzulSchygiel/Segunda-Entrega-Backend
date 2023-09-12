//-----SERVIDOR EXPRESS-----//
import express, { request, response } from "express";

const port = 8080;

const app = express();

app.listen(port, () => console.log("Servidor Funcionando"));

app.use(express.urlencoded({extended: true}));

app.get("/bienvenido", (request,response) => {
    response.send("Hola Usuario");
})

//-----RUTA "/PRODUCTS" Y QUERY.PARAM "?LIMIT="-----//
app.get("/products", (request, response) => {
    const limit = request.query.limit;
if(limit){
    const result = products.filter(u => u.limit === limit);
    response.send(result)
} else {
    response.send(products);
    }
});

const products = [
    {title:"Minecraft", limit:"aventura", price:500, thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fimg%2Fcfn%2F11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png&tbnid=VdCeew7CQrSG3M&vet=12ahUKEwibkY3d1-WAAxW-K7kGHdNFDBEQMygAegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fes-ar%2Fgames%2Fminecraft%2F&docid=yQvb8-XrtxtBCM&w=2048&h=2048&q=minecraft&ved=2ahUKEwibkY3d1-WAAxW-K7kGHdNFDBEQMygAegUIARDMAQ", id:1, stock:200},
    {title:"Grand Theft Auto V", limit:"acción", price:2000, thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-geektopia.com%2Fstorage%2Ft%2Fi%2F242%2F24231%2F91k7mmlq6hl_sl1500_.webp&tbnid=C9NhQTXcyXiXNM&vet=12ahUKEwi-5KjI1uWAAxUTIbkGHYk1A3oQMygGegUIARCgAQ..i&imgrefurl=https%3A%2F%2Fwww.geektopia.es%2Fes%2Fproduct%2Frockstar-games%2Fgrand-theft-auto-v%2F&docid=EMZ6zOzFUUfWiM&w=1080&h=1500&q=gta%20v%20descripcion&ved=2ahUKEwi-5KjI1uWAAxUTIbkGHYk1A3oQMygGegUIARCgAQ", id:2, stock:100},
    {title:"Red Dead Redemption", limit:"aventura", price:2000, thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fcdn%2FUP1004%2FCUSA03041_00%2FHpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png&tbnid=oQnlJw8elTLfAM&vet=12ahUKEwi90aOB2uWAAxXMFLkGHQ2mAWAQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fes-ar%2Fgames%2Fred-dead-redemption-2%2F&docid=smbDnPb1swY1CM&w=1024&h=1024&q=Red%20Dead%20Redemption%202&hl=es-419&ved=2ahUKEwi90aOB2uWAAxXMFLkGHQ2mAWAQMygAegQIARBz", id:3, stock:100},
    {title:"Mortal Kombat 1", limit:"lucha", price:3000, thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202305%2F1515%2F93797636f47b37b74e9d3740e17ae1306aaf539c7952a703.jpg&tbnid=478w-M5mpUK5YM&vet=12ahUKEwjCt5CF3OWAAxWnupUCHeBxDwEQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fstore.playstation.com%2Fes-ar%2Fproduct%2FUP1018-PPSA07570_00-MKONE00000000000&docid=NaaGLY7xDoky8M&w=1440&h=2160&q=mortal%20kombat%201&hl=es-419&ved=2ahUKEwjCt5CF3OWAAxWnupUCHeBxDwEQMygAegQIARBz", id:4, stock:50},
    {title:"Stray", limit:"aventura", price:1000, thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fstray%2Fimages%2F3%2F39%2FSite-community-image%2Frevision%2Flatest%3Fcb%3D20220731151430%26path-prefix%3Des&tbnid=C6HUPG6W2GdobM&vet=12ahUKEwiv7cLj3-WAAxWjrJUCHQ3hD2YQMygMegQIARBr..i&imgrefurl=https%3A%2F%2Fstray.fandom.com%2Fes%2Fwiki%2FStray&docid=g63aTmDI45LbuM&w=376&h=452&q=stray%20genero%20&hl=es-419&ved=2ahUKEwiv7cLj3-WAAxWjrJUCHQ3hD2YQMygMegQIARBr", id:5, stock:200}
]

//-----RUTA "/PRODUCTS/:PID"-----//
app.get("/products/:pid", (request, response) => {
    const id = parseInt(request.params.pid);
    const product = products.find(p => p.id === id);
    if(product){
        response.send(product);
    } else {
        response.send("¡Error!, producto no encontrado...");
    }
});