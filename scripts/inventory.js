inventoryItems = [
    {
        id: 'case',
        name: "Case",
        imgSrc: "./assets/pc-parts/case.png",
        isRedeemed: false,
        description: "Il case è il contenitore di tutte le componenti hardware che formano un computer."
    },
    {
        id: 'motherboard',
        name: "Scheda madre",
        imgSrc: "./assets/pc-parts/motherboard.png",
        isRedeemed: false,
        description: "La scheda madre è un tipo di scheda elettronica che costituisce la base su cui vengono collegate tutte le altre componenti."
    },
    {
        id: 'cpu',
        name: "Processore",
        imgSrc: "./assets/pc-parts/cpu.png",
        isRedeemed: false,
        description: "Il processore è l'unità di calcolo principale di un computer."
    },
    {
        id: 'ram',
        name: "Memoria RAM",
        imgSrc: "./assets/pc-parts/ram.png",
        isRedeemed: false,
        description: "La memoria RAM è un tipo di memoria volatile necessaria per eseguire i processi."
    },
    {
        id: 'hdd',
        name: "Disco rigido",
        imgSrc: "./assets/pc-parts/hard-disk.png",
        isRedeemed: false,
        description: "Il disco rigido è un tipo di memoria non volatile su cui viene installato il sistema operativo e/o vengono archiviati i dati dell'utente."
    },
    {
        id: 'gpu',
        name: "Scheda video",
        imgSrc: "./assets/pc-parts/gpu.png",
        isRedeemed: false,
        description: "La scheda video è un'unità di calcolo dedicata all'elaborazione di immagini e video."
    },
    {
        id: 'cooling-fan',
        name: "Ventola di raffreddamento",
        imgSrc: "./assets/pc-parts/fan.png",
        isRedeemed: false,
        description: "Le ventole di raffreddamento sono accessori che consentono di dissipare il calore prodotto dall'hardware del computer."
    },
    {
        id: 'monitor',
        name: "Monitor",
        imgSrc: "./assets/pc-parts/monitor.png",
        isRedeemed: false,
        description: "Il monitor è lo schermo tramite cui l'utente può visualizzare un'interfaccia grafica dei software e del sistema operativo."
    },
    {
        id: 'keyboard-and-mouse',
        name: "Mouse e tastiera",
        imgSrc: "./assets/pc-parts/keyboard-and-mouse.png",
        isRedeemed: false,
        description: "Mouse e tastiera sono le periferiche di input principali che consentono all'utente di interagire con il computer."
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
    el.onclick = () => {
        openItemDetails(item);
    };

    return el;
}

function openItemDetails(item) {
    document.getElementById("item-name").innerText = item.name;
    document.getElementById("item-description").innerText = item.description;
    document.getElementById("item-img").src = item.imgSrc;
    showModal('inventory-item-details-modal');
}

let inventoryItemsContainer = document.getElementById('inventory-items-container');

for (let i = 0; i < inventoryItems.length; i++) {
    inventoryItemsContainer.appendChild(getInventoryItemHTMLElement(inventoryItems[i]));
}