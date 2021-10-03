/*!
	- File Name: index.js
	- StudentID: 301217825
	- Student’s Name: Yang Li
	- Date: 2021-10-1
  */
var express = require('express');
var router = express.Router();

/* 1.GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {router: 'home'});
});
router.get('/home', function (req, res, next) {
    res.render('home', {router: 'home'});
});


/* 2.GET about me page. */
router.get('/about', function (req, res, next) {
    res.render('about_me', {router: 'about'});
});

/* 3.GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('projects', {router: 'projects'});
});

/* 4.GET services page. */
router.get('/services', function (req, res, next) {
    res.render('services', {router: 'services'});
});


/* 5.GET contact me page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', {router: 'contact'});
});

module.exports = router;
