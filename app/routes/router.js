var express = require("express");
var router = express.Router();


const pool = require("../../config/pool_conexoes");

router.get("/", async (req, res) => {

    try{
        const [lista, estrutura] = await pool.query("select * from tarefas");
            console.table(lista);
            console.log(estrutura);
            res.render('pages/index',{"LinhasTabela":lista});
    }catch(error){
        console.log(error);
    }

});

router.post("/", function (req, res) {


});



module.exports = router;