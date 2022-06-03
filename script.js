const smileyFace = document.querySelector('.smiley-face');

smileyFace.addEventListener('click', heyAlert);

function heyAlert(e) {
    for(let i = 0; i <= smileyFace.children; i++){
        this.addEventListener('transitionend', function(e) {
            console.log('Hey');
        });
    } 
}

console.log(smileyFace.children.length);