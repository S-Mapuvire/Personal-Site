mainSection = document.querySelector('main');
headerSection = document.querySelector('header');
loadingSection = document.querySelector('#loading');

window.addEventListener('resize', (e)=>{
    refresh();
})

const refresh = () => window.location.reload();

window.addEventListener('DOMContentLoaded', (e) => {
    loading();
})

const loading = () => {
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('done')
        }, 2000) 
    }).then(()=>{
        mainSection.style.display = 'block';
        headerSection.style.display = 'block';
        loadingSection.style.display = 'none';
    })
}