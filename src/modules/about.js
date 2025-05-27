export default function loadAbout() {
    
    const section = document.createElement('div');
   
    section.classList.add('about');

    section.innerHTML = 
    `
      <h1>About Us</h1>
      <p>We are a family-owned restaurant established in 2005, 
         passionate about authentic food and friendly service.</p>
      <p>Address: 12 Flavor Street, Bucharest</p>
      <p>Phone: +40 760 000 000</p>
      <p>Hours:Monday–Sunday: 10:00 AM – 10:00 PM</p> `;
    
    return section;

}