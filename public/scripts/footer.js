//  TO-DO - make into a Vue component, make the 'tech used' dynamic, replace the arrows with actual arrow outs, add neocities link, make links functional, make the 'other accounts' list relevant to given page
// 

function fillFooter(){
    let template = `
<div id="footer-link-area">
<p id="footer-header">My Other Accounts</p>
<ul id="footer-links">    
  <li><a href="" class="footer-link">Flickr</a></li>
  <li><a href="" class="footer-link">Github</a></li>
  <li><a href="" class="footer-link">WordPress</a></li>
  <li><a href="" class="footer-link">Email Address</a></li>
</ul>
</div>
<hr>

<p class="footer-label"> &copy; S.Mapuvire 2024 </p>
<p class="footer-label"> This page was made with Vue.js, p5.js, SASS, and some Vanilla JS </p>
`;
    let area = document.querySelector('footer');
    area.innerHTML = template;
}

fillFooter();


