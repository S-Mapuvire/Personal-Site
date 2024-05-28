import Footer from '../components/footer.js'

const vm = Vue.createApp({
    data(){
        return {
            test: 'working',
        }
    },
}).component('footer', Footer).mount("#app");