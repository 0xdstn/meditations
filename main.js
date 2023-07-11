if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};

var curDate = new Date().toLocaleString().split(',')[0].replaceAll('/','');

var grateful1 = document.getElementById('grateful1');
var grateful2 = document.getElementById('grateful2');
var grateful3 = document.getElementById('grateful3');
var great1 = document.getElementById('great1');
var great2 = document.getElementById('great2');
var great3 = document.getElementById('great3');
var affirmation = document.getElementById('affirmation');
var highlight1 = document.getElementById('highlight1');
var highlight2 = document.getElementById('highlight2');
var highlight3 = document.getElementById('highlight3');
var better = document.getElementById('better');

document.getElementById('date').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) ;

function clearAnswers() {
    localStorage.setItem('meditations-date',curDate);
    localStorage.setItem('meditations-grateful1','');
    localStorage.setItem('meditations-grateful2','');
    localStorage.setItem('meditations-grateful3','');
    localStorage.setItem('meditations-great1','');
    localStorage.setItem('meditations-great2','');
    localStorage.setItem('meditations-great3','');
    localStorage.setItem('meditations-affirmation','');
    localStorage.setItem('meditations-highlight1','');
    localStorage.setItem('meditations-highlight2','');
    localStorage.setItem('meditations-highlight3','');
    localStorage.setItem('meditations-better','');
    grateful1.value = '';
    grateful2.value = '';
    grateful3.value = '';
    great1.value = '';
    great2.value = '';
    great3.value = '';
    affirmation.value = '';
    highlight1.value = '';
    highlight2.value = '';
    highlight3.value = '';
    better.value = '';
}

if( localStorage.getItem('meditations-date') !== null ) {
    if(curDate !== localStorage.getItem('meditations-date')) {
        clearAnswers();
    } else {
        grateful1.value = localStorage.getItem('meditations-grateful1');
        grateful2.value = localStorage.getItem('meditations-grateful2');
        grateful3.value = localStorage.getItem('meditations-grateful3');
        great1.value = localStorage.getItem('meditations-great1');
        great2.value = localStorage.getItem('meditations-great2');
        great3.value = localStorage.getItem('meditations-great3');
        affirmation.value = localStorage.getItem('meditations-affirmation');
        highlight1.value = localStorage.getItem('meditations-highlight1');
        highlight2.value = localStorage.getItem('meditations-highlight2');
        highlight3.value = localStorage.getItem('meditations-highlight3');
        better.value = localStorage.getItem('meditations-better');
    }
} else {
    clearAnswers();
}

grateful1.addEventListener("keyup", function() { localStorage.setItem('meditations-grateful1',grateful1.value); }); 
grateful2.addEventListener("keyup", function() { localStorage.setItem('meditations-grateful2',grateful2.value); }); 
grateful3.addEventListener("keyup", function() { localStorage.setItem('meditations-grateful3',grateful3.value); }); 
great1.addEventListener("keyup", function() { localStorage.setItem('meditations-great1',great1.value); }); 
great2.addEventListener("keyup", function() { localStorage.setItem('meditations-great2',great2.value); }); 
great3.addEventListener("keyup", function() { localStorage.setItem('meditations-great3',great3.value); }); 
affirmation.addEventListener("keyup", function() { localStorage.setItem('meditations-affirmation',affirmation.value); }); 
highlight1.addEventListener("keyup", function() { localStorage.setItem('meditations-highlight1',highlight1.value); }); 
highlight2.addEventListener("keyup", function() { localStorage.setItem('meditations-highlight2',highlight2.value); }); 
highlight3.addEventListener("keyup", function() { localStorage.setItem('meditations-highlight3',highlight3.value); }); 
better.addEventListener("keyup", function() { localStorage.setItem('meditations-better',better.value); }); 
