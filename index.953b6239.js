for(var e=document.querySelectorAll(".population"),t=0,o=0;o<e.length;o++){var n=+e[o].textContent.replace(/,/g,"");"number"==typeof n&&(t+=n)}var r=t/e.length;document.querySelector(".total-population").textContent=t.toLocaleString("en-US"),document.querySelector(".average-population").textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.953b6239.js.map
