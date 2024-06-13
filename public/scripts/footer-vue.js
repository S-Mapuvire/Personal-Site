//  TO-DO - make into a Vue component, replace the arrows with actual arrow outs, add neocities link, make links functional, make the 'other accounts' list relevant to given page
//

const credits = {
    template: `<div id="footer-link-area"><p id="footer-header">My Other Accounts</p><ul id="footer-links"><li><a href="" class="footer-link">Flickr</a></li><li><a href="mailto:smapuvire@proton.me" class="footer-link">Email Address</a></li><li><a href="https://github.com/S-Mapuvire" class="footer-link">Github</a></li><li><a href="https://nothingheretosee79.wordpress.com/" class="footer-link">WordPress - Currently Blank</a></li><li><a href="https://yumnothingsoup.neocities.org/" class="footer-link">Neocities Page - Currently Empty</a></li></ul></div><hr><p class="footer-label"> &copy; S.Mapuvire 2024 </p><p class="footer-label"> This page was made with: {{technologiesUsed ()}}</p>`,
    data() {
        return {
            pageTechnologies: ["Vue", "SASS", "Express"],specificPageTechnologies: {
                "Code Examples":[],
                "Cooking":["MongoDB"],
                "Drawings":[],
                "Personal Home Page":["p5.js"],
                "Photos":[],
                "Resume":[],
                "Writings":["MongoDB"],},
            }
        },
    methods: {
        technologiesUsed (){
            if (document.title in this.specificPageTechnologies)
                {
                  return `${this.pageTechnologies[0]}, ${this.pageTechnologies[1]}, ${this.pageTechnologies[2]} and ${this.specificPageTechnologies[document.title]}`
                }
                else{
                  return `${this.pageTechnologies[0]}, ${this.pageTechnologies[1]}, and ${this.pageTechnologies[2]}`
                }
            }
        }
};

Vue.createApp({
    components: {
        credits
    },
}).mount('#app');