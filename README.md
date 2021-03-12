## Table of contents
* [General info](#general-info)
* [Technologies](#tecnologies)
* [Setup](#setup)
* [API calls](#apicalls)
* [Looked like](#lookedlike)

## General info
This is a end project for school course web2.
It is a sound board that counts to database how meany times certain sound is clicked.
Different tiles would produce different sound, and you could indicate your favourite
by pressing it repeatedly
To use this project you have to build your own database with following table.

This project is not mean to be used though it might contain some useful information about JS and library useage

![database schema](https://github.com/shitCodeIsShit/web2FinalProject/blob/master/readmeImages/firefox_n3OqSh8ErW.png)

## Tecnologies
Project is created with:
* Basic HTML, CSS, JS, Some Bootstarp
* Node js
* Node express and mysql libraries
* MySQL database

Js libraries used:
* Howler (sound)
* JS anime (animations)
* CanvasJS (charts and graphs)

## Setup
Clone -> cd to /projectFolder -> npm install -> install Tecnologies mentioned with npm -> run node db_connection.js

## Api calls

All the api calls to sever return simple json object. Adress used
(localhost:3000/)

#### /getSoundData
* Returns all sound names and the amount of clicks (array[])

#### /getLowestSound
* Returns sound that has the least click (name, clicks)

#### /getHighestSound
* Returns sound that has the most clicks (name, clicks)


## Looked like
This is how the project looked like
![main page](https://github.com/shitCodeIsShit/web2FinalProject/blob/master/readmeImages/firefox_St4krCMfdD.png)
![stats](https://github.com/shitCodeIsShit/web2FinalProject/blob/master/readmeImages/firefox_002nGxaKAq.png)