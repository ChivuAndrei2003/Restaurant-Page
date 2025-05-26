export default function loadHome() {
    
    const contentContainer = document.getElementById('content');

    
    contentContainer.innerHTML = 
    `<div class='home'>
    <h1>Welcome to Flavor Haven!</h1>
    <p>Experience delicious dishes in a cozy and elegant atmosphere.</p>
    <p>Perfect for family dinners, date nights, or just a treat for yourself.</p></div>`;
    
    return contentContainer.innerHTML;

}