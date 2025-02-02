//waiting for DOM content to be load
document.addEventListener('DOMContentLoaded', function () {
    //selecting all nodes in the SVG
    const nodes = document.querySelectorAll('.node');
    let currentNode = 0;

    // Adding click event listeners to the nodes
    nodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            //getting click event listner for nodes
            //getting page name from ari label attribute.
            const page = node.getAttribute('aria-label');
            console.log(`Redirecting to ${page} page...`);
        });

        
        });
    });

   