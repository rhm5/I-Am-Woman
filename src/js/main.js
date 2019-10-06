'use strict';



var nav = document.querySelector('.nav'),
    navToggle = nav.querySelector('.nav__toggle'),
    header = document.querySelector('.page-header'),
    collection = document.querySelector('.collection');


nav.classList.remove('nav--nojs');
header.classList.add('page-header--closed');

navToggle.addEventListener('click', function() {
  if(nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    header.classList.remove('page-header--closed');
    collection.classList.add('collection--closed');
  } else {
    nav.classList.add('nav--closed');
    header.classList.add("page-header--closed");
    collection.classList.remove('collection--closed');
  }
});