"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
    root: '#app',
    theme: 'ios',
    name:'Fursa',
    routes: routes,
    cache:false,
    view: {
        pushState: false,
    },
    touch:{
        fastClicks:true,
    }
});

app.sheet.create({
    el: '.my-sheet-swipe-to-close',
    swipeToClose: true,
    backdrop: true,
});


var mainView = app.views.create('.view-main', {
    url: './index.html'
});


var countiesJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/counties', function(data) {
    return data
});

var ministriesJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/ministries', function(data) {
    return data
});
var big4agendaJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/big4agenda', function(data) {
    return data
});
var noticesJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/notices', function(data) {
    return data
});
var jobsJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/jobs', function(data) {
    return data
});
var tendersJson = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/tenders', function(data) {
    return data
});
var featuredTender = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/featured/6',function(data){
    return data
});
var latestJobs = app.request.get(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/latestJobs`,function(data){
    return data
});
var latestTenders = app.request.get(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/latestTenders`, function (data) {
    return data
});
var favoritedTenders = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchTenderNotification/'+sessionStorage.getItem('user'), function (data) {
    return data
});
var favoritedJobs = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchNotification/'+sessionStorage.getItem('user'), function (data) {
    return data
});
var userData = app.request.get('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchUser/'+sessionStorage.getItem('user'),function(data){
    return data
});

var user = sessionStorage.getItem('user');

var userInfo = app.request.get('http://localhost:8000/api/auth/user/'+sessionStorage.getItem('user'),function(data){
    return data
});

console.log(XMLHttpRequest.response);

var username = document.getElementById('username');

username.textContent += user;