let text = document.getElementById('text');
let leaf1 = document.getElementById('leaf1');
let leaf2 = document.getElementById('leaf2');
let bgmountain = document.getElementById('bgmountain');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let branch = document.getElementById('branch');
let elephant  = document.getElementById('elephant');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const currentPage = Math.floor(scrollTop / windowHeight);

    if (value * 1.5 < 900) {
        text.style.marginTop = value * 1.5 + 'px';
        bgmountain.style.marginTop = value * 1.5 + 'px';

        leaf1.style.top = value * -1.5 + 'px';
        leaf1.style.left = value * -1.5 + 'px';

        leaf2.style.top = value * 1.5 + 'px';
        leaf2.style.left = value * -1.5 + 'px';

        mountain2.style.left = value * -1 + 'px';
        mountain1.style.left = value * 0.5 + 'px';

        branch.style.top = value * -1.5 + 'px';
        branch.style.left = value * 1.5 + 'px';

        elephant.style.left = value * 1.2 + 'px';
      }
});
