"use strict";function controller(e){function t(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function n(){c.innerText=f.score}function a(){var e=f.flippedCards[0],t=f.flippedCards[1];e.value==t.value?(s++,f.score+=100,e.hideCard(),t.hideCard(),n(),s==r&&(window.clearInterval(i),p.innerText="Winner!...",g.innerText="Play",u.classList.remove("hidden"))):((e.seen||t.seen)&&(f.score-=50,n()),e.seen=!0,e.toggleCard(),t.seen=!0,t.toggleCard()),f.flippedCards=[]}var i,r=10,s=0,d=[],o=e.container,c=e.scoreDisplay,l=e.minuteDisplay,m=e.secondDisplay,u=e.messageBox,p=e.messageDisplay,g=e.messageBtn,f={score:0,initTime:(new Date).getTime(),flippedCards:[]};return{init:function(){u.classList.add("hidden");for(var e=[],n=0;n<2*r;n++){var s;(s=n<10?new Card(n,n):new Card(n-10,n)).element.addEventListener("click",function(){!function(e){if(f.flippedCards.length<2){var t=d.filter(function(t){return Number(t.id)==Number(e.id)})[0];f.flippedCards.push(t),t.toggleCard(),2==f.flippedCards.length&&setTimeout(a,500)}}(this)}),e.push(s)}for(n=0;n<2*r;n++){var c=t(0,2*r-n);d.push(e[c]),o.appendChild(e[c].element),e.splice(c,1)}i=window.setInterval(function(){var e=((new Date).getTime()-f.initTime)/1e3,t=Math.floor(e/60),n=Math.floor(e-60*t);m.innerText=n<10?"0"+n:n,l.innerText=t<10?"0"+t:t},1e3)}}}function Card(e,t){var n=this;n.value=e,n.id=t,n.compose=function(){var e=document.createElement("div");e.classList.add("card-wrapper"),e.setAttribute("id",n.id);var t=document.createElement("div");t.classList.add("card-rotate");var a=document.createElement("span");a.setAttribute("class","card front card"+n.value);var i=document.createElement("span");return i.setAttribute("class","card back"),t.appendChild(i),t.appendChild(a),e.appendChild(t),e},n.toggleCard=function(){n.element.getElementsByClassName("card-rotate")[0].classList.toggle("flipped")},n.hideCard=function(){n.element.classList.add("hidden")},n.element=n.compose(),n.seen=!1}function newGame(){config.container.innerHTML="",config.scoreDisplay.innerText=0;new controller(config).init()}var config={container:document.getElementById("game-wrapper"),scoreDisplay:document.getElementById("score-display"),minuteDisplay:document.getElementById("minute-display"),secondDisplay:document.getElementById("second-display"),messageBox:document.getElementById("message-box"),messageDisplay:document.getElementById("message-display"),messageBtn:document.getElementById("message-btn")},resetBtn=document.getElementById("reset-btn");resetBtn.addEventListener("click",newGame);var startBtn=document.getElementById("message-btn");startBtn.addEventListener("click",newGame),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})});