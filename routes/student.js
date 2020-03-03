var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('student', { who: 'Student' });
});

function done() {
	var x=document.getElementById("donemsg")
	x.innerHTML = "Message sent to Teacher successfully"
	get("https://zhentestwechat.azurewebsites.net/api/Inc", null, "?code=qUzUGwLj0n8jXbgTSh/OnJm49elggJpkW8lPBy3387PSlnr6LhiupA==&name=aa");
}

module.exports = router;
