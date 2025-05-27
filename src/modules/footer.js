export default function loadFooter () {

    const footer = document.createElement('footer');

    footer.innerHTML = 
    ` 
    <p class="footer-content">
        Made with love by
        <a href="https://github.com/ChivuAndrei2003" target="_blank">ChivuAndrei2003</a>
    </p>`;

   
   return footer;
}

