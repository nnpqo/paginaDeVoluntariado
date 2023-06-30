const { Router } = require("express");
const router = Router();

const publicacionCont = require("../controllers/publicacionController");
const userCont = require("../controllers/userController");

router.get('/', (req, res) => {
  res.render(index)
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", userCont.createUser);

router.post("/login", userCont.getUser);

router.get("/index", (req, res) => {
  res.render("index", { title: "mi pagina con ejs" });
});
router.get("/publicacion", (req, res) => {
  res.render("publicacion", { title: "Crear publicacion" });
});

router.get("/perfil", (req, res) => {
  res.render("perfil");
});

router.post("/create_publicacion", publicacionCont.createPublicacion);



router.get("/usuario", (req, res) => {});
module.exports = router;
