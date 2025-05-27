export default function loadMenu() {
    
    const section = document.createElement('div');

    section.classList.add('menu');
    
    section.innerHTML = 
    `
        <h1>Menu</h1>

        <h2>Food</h2>
        <ul>
          <li><strong>Margherita Pizza</strong> 25 RON</li>
          <li><strong>Spaghetti Carbonara</strong> 30 RON</li>
          <li><strong>Caesar Salad</strong> 22 RON</li>
          <li><strong>Cheesecake</strong> 18 RON</li>
        </ul>

        <h2>Beverages</h2>
        <ul>
          <li><strong>Espresso</strong> 8 RON</li>
          <li><strong>Fresh Orange Juice</strong> 12 RON</li>
          <li><strong>House Lemonade</strong> 10 RON</li>
          <li><strong>Red Wine (glass)</strong> 15 RON</li>
        </ul>`;
    
    return section;

}