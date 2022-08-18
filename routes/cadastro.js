var express = require('express');
var router = express.Router();

/* GET cadastro. */
router.get('/', function(req, res, next) {
  res.render('cadastro', {});
});

/* POST cadastro. */
router.post('/', function(req, res, next) {
  global.produtos.push({nome: req.body.nome, quantidade: req.body.quantidade, valor: req.body.valor})
  res.redirect('/')
});

module.exports = router;