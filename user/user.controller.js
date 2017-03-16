'use strict';

exports.userName = function(req, res){

        var FirstName = req.query.FirstName;
        var LastName = req.query.LastName;

        res.send(FirstName + " " + LastName);

    }

exports.userBioInp = function(req, res) {
     res.sendfile('index.html');

}

exports.userBioOut = function(req, res){

    res.send(JSON.stringify(req.body, req.body.fullName=req.body.fisrtName+ " " + req.body.lastName));

};