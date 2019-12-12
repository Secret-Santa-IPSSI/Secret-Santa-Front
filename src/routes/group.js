const express = require('express');
const request = require('request');
//const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

const group =  express.Router();
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

group.get('/',function (req, res) {
    res.render('group');
    let url_Api="http://lcoalhost/:27017";
    console.log(url_Api);
    request(url_Api,function (err, response, body) {
        try{
            res.render('/',{});
        }catch(err){
                console.error(err);
                res.render('index', {degres: null, error: 'Error, please try again'});
         }
    });

});

group.get("/:idgroup", urlencodedParser,function (req,res){
    let idgroup=req.params.idgroup;
    if ( idgroup=== ' ' || idgroup === null || idgroup==='undefined'){
        res.render('index',{degres: null, error: 'Error, please try again'});
        console.log("error");
    }else {
        let url_Api = "http://lcoalhost/:27017";
        console.log(url_Api);
        request(url_Api, function (err, response, body) {
            try {
                res.render('/', {});
            } catch (err) {
                console.error(err);
                res.render('index', {degres: null, error: 'Error, please try again'});
            }
        });
    }
});
module.exports = group;