export default function loadHome() {
    
    const section = document.createElement('div');
    
    section.classList.add('home');
    section.innerHTML = 
    `
    <h1>Welcome to Flavor Haven!</h1>
    <p>Experience delicious dishes in a cozy and elegant atmosphere.</p>
    <p>Perfect for family dinners, date nights, or just a treat for yourself.</p>`;
    
    return section;

}