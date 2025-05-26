import loadAbout from "./modules/about";
import loadFooter from "./modules/footer";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";

const div = document.getElementById('content');

function clearAndLoad(pageLoader){
    div.innerHTML = '';
    div.appendChild(pageLoader());
    div.appendChild(loadFooter());
}
clearAndLoad(loadHome);
function addNavEvents(){
    const homeBtn  = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const menuBtn  = document.getElementById('menuBtn');
    
    homeBtn.addEventListener("click",  () => clearAndLoad(loadHome));
    aboutBtn.addEventListener("click", () => clearAndLoad(loadAbout));
    menuBtn.addEventListener("click",  () => clearAndLoad(loadMenu));
    
}
addNavEvents();




