//  TO-DO - make into a Vue component, replace the arrows with actual arrow outs, add neocities link, make links functional, make the 'other accounts' list relevant to given page
// 

function technologiesUsed(){
  let pageTechnologies = ["Vue", "SASS", "Express"];
  let specificPageTechnologies = {
    "Code Examples":[],
    "Cooking":["MongoDB"],
    "Drawings":[],
    "Personal Home Page":["p5.js"],
    "Photos":[],
    "Resume":[],
    "Writings":["MongoDB"],
  };

  if (document.title in specificPageTechnologies)
    {
      return `${pageTechnologies[0]}, ${pageTechnologies[1]}, ${pageTechnologies[2]} and ${specificPageTechnologies[document.title]}`
    }
    else{
      return `${pageTechnologies[0]}, ${pageTechnologies[1]}, and ${pageTechnologies[2]}`
    }
}

function fillFooter(){
    let template = `
<div id="footer-link-area">
<p id="footer-header">My Other Accounts</p>
<ul id="footer-links">    
  <li><a href="" class="footer-link">Flickr</a></li>
  <li><a href="mailto:smapuvire@proton.me" class="footer-link">Email Address</a></li>
  <li><a href="https://github.com/S-Mapuvire" class="footer-link">Github</a></li>
  <li><a href="https://nothingheretosee79.wordpress.com/" class="footer-link">WordPress - Currently Blank</a></li>
  <li><a href="https://yumnothingsoup.neocities.org/" class="footer-link">Neocities Page - Currently Empty</a></li>
</ul>
</div>
<hr>

<p class="footer-label"> &copy; S.Mapuvire 2024 </p>
<p class="footer-label"> This page was made with ${technologiesUsed()} </p>
`;
    let area = document.querySelector('footer');
    area.innerHTML = template;
}

fillFooter();


zzz