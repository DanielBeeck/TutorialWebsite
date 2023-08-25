const express = require("express");
const router = express.Router();
// [TODO]
// Weitere benoetigte Module einbinden

router.use(express.static('public'));
router.use(express.urlencoded({extended:false}));

router.get("/", function (req, res) {
  // [TODO]
  // Implementieren: Liste der Kategorien anzeigen

  // res.sendFile('list.html', {root: '../v0/'});
  res.render('list');
});

router.get("/tutorials", function (req, res) {
  // [TODO]
  // Implementieren: Tutorials zur gegebenen Kategorie anzeigen
  // (Kategorie als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.category)
  //Ich weiß nicht was ich mit der query anfangen soll
  const category = req.query.category;
  res.render('tutorials');
  // res.sendFile('tutorials.html', {root:'../v0'})
});

router.get("/tutorial", function (req, res) {
  // [TODO]
  // Implementieren: Details zum Tutorial mit gegebenem Namen anzeigen
  // (Name als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.name)

  // res.sendFile('tutorial.html', {root:'../v0/'})
  $type = req.query.type;
  // $tuttype = req.body.tutorialtype;
  // console.log('VIDEO JUNGE',tuttype);
  // if($tuttype === 'Video')
  //   console.log('VIDEO JUNGE');
  // else
  // {

  // }
  res.render('tutorial');

});

router.get("/form", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  // res.sendFile('form.html', {root: '../v0/'})
  $form = req.body.name;
  console.log($form);
  res.render('form');
});

router.post("/form", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  // res.sendFile('form.html', {root: '../v0/'})
  const newTutorial = {
  name : req.body.name,
  sprache: req.body.language,
  beschreibung : req.body.description,
  dauer : req.body.duration,
  datum : req.body.date,
  type : req.body.type,
  embedCode : req.bodycontent,
  }

  // XXX.push(newTutorial);

  console.log(newTutorial.name);
  res.render('list');
});


router.use(function(req,res){
  res.status(404);
  res.render('errorPage');
})


module.exports = router;