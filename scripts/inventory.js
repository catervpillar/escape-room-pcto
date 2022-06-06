inventoryItems = [
    {
        id: 'case',
        name: "Case",
        imgSrc: "./assets/pc-parts/case.png",
        isRedeemed: false
    },
    {
        id: 'motherboard',
        name: "Scheda madre",
        imgSrc: "./assets/pc-parts/motherboard.png",
        isRedeemed: false
    },
    {
        id: 'cpu',
        name: "Processore",
        imgSrc: "./assets/pc-parts/cpu.png",
        isRedeemed: false
    },
    {
        id: 'ram',
        name: "Memoria RAM",
        imgSrc: "./assets/pc-parts/ram.png",
        isRedeemed: false
    },
    {
        id: 'hdd',
        name: "Disco rigido",
        imgSrc: "./assets/pc-parts/hard-disk.png",
        isRedeemed: false
    },
    {
        id: 'gpu',
        name: "Scheda video",
        imgSrc: "./assets/pc-parts/gpu.png",
        isRedeemed: false
    },
    {
        id: 'cooling-fan',
        name: "Ventola di raffreddamento",
        imgSrc: "./assets/pc-parts/fan.png",
        isRedeemed: false
    },
    {
        id: 'monitor',
        name: "Monitor",
        imgSrc: "./assets/pc-parts/monitor.png",
        isRedeemed: false
    },
    {
        id: 'keyboard-and-mouse',
        name: "Mouse e tastiera",
        imgSrc: "./assets/pc-parts/keyboard-and-mouse.png",
        isRedeemed: false
    }
]

function getInventoryItemHTMLElement(item) {
    let el = document.createElement('div');
    el.id = `${item.id}-inventory-item`;
    el.classList.add('inventory-item');
    el.innerHTML = `
    <img src="${item.imgSrc}" alt="">
    <p>${item.name}</p>
    <div class="overlay">
        <span class="material-icons md-36">lock</span>
    </div>`;

    return el;
}

let inventoryItemsContainer = document.getElementById('inventory-items-container');

for (let i = 0; i < inventoryItems.length; i++) {
    inventoryItemsContainer.appendChild(getInventoryItemHTMLElement(inventoryItems[i]));
}