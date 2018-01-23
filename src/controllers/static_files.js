const express = require('express');
const router = express.Router();

router.use('/', express.static(__dirname + '/../../www')); // redirect root

//Javascript routes
router.use('/js', [
  express.static(__dirname + '/../../node_modules/jquery/dist'),
  express.static(__dirname + '/../../node_modules/bootstrap/dist/js'),
  express.static(__dirname + '/../../node_modules/datatables-bootstrap/js'),
  express.static(__dirname + '/../../node_modules/bootstrap-datepicker/dist/js'),
  express.static(__dirname + '/../../node_modules/bootstrap-datepicker/dist/locales'),
  express.static(__dirname + '/../../node_modules/cytoscape/dist'),
  express.static(__dirname + '/../../node_modules/moment/min'),
  express.static(__dirname + '/../../www/js')
]);

//css routes
router.use('/css', [
  express.static(__dirname + '/../../node_modules/bootstrap/dist/css'),
  express.static(__dirname + '/../../node_modules/font-awesome/css'),
  express.static(__dirname + '/../../node_modules/bootstrap-datepicker/dist/css'),
  express.static(__dirname+'/../../node_modules/font-awesome-animation/dist'),
  express.static(__dirname + '/../../www/css')
]);

router.use('/fonts',[
  express.static(__dirname + '/../../node_modules/font-awesome/fonts'),
])

router.use('/images',[
  express.static(__dirname + '/../../node_modules/datatables/media/images'),

]);

module.exports=router;
