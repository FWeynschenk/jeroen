const cards = [{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 },{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 },{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 },{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 },{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 },{ name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }, { name: 0 }, { name: 1 }]
const baseUrl = "https://fweynschenk.github.io/jeroen/";

function onload() {
    const params = getParams(window.location.href);

    const backgroundImage = document.createElement("img");
    backgroundImage.src = baseUrl + "background.jpg";
    backgroundImage.onload = function () { document.body.style.backgroundImage = backgroundImage; };

    const scale = params.scale || 80;
    const WIDTH = 340 * scale / 100;
    const HEIGHT = 512 * scale / 100;

    cards.forEach(function (c) {
        const card = document.createElement("canvas");
        card.setAttribute("width", WIDTH + "px");
        card.setAttribute("height", HEIGHT + "px");
        card.setAttribute("title", "test");

        const ctx = card.getContext("2d");
        ctx.imageSmoothingEnabled = true;

        const img = document.createElement("img");
        img.src = baseUrl + c.name + ".png";

        img.onload = function () { ctx.drawImage(img, 0, 0, WIDTH, HEIGHT); };

        document.body.appendChild(card);

    });
}
//340x512


function getParams(url) {
    const params = {};
    const parser = document.createElement('a');
    parser.href = url;
    const query = parser.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};
