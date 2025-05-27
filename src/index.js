import loadAbout from "./modules/about";
import loadFooter from "./modules/footer";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import "./style.css";
const content = document.getElementById('content');


function clearAndLoad(pageLoader) {
    content.innerHTML = '';
    content.appendChild(pageLoader());
    content.appendChild(loadFooter());
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

//sa ma uit maine in gpt sa vad care e faza ca acolo am o posibila soluties


