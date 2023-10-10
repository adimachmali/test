(function(){
const elemDiv = document.createElement("div");
elemDiv.style.cssText = `
position:absolute;
width:100%;
height:fit-content;
z-index:100;
background:#000;
color:#fff;
font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
padding: 16px;`;
elemDiv.innerHTML = "Notice: This is a disclaimer";
document.body.prepend(elemDiv);
})();
