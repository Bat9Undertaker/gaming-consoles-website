// Функция для поиска в таблице
function filterTable() {
    const input = document.getElementById("searchInput"); // Поле ввода
    const filter = input.value.toLowerCase(); // Текст для поиска
    const table = document.querySelector(".comparison-table"); // Таблица
    const rows = table.querySelectorAll("tbody tr"); // Строки внутри <tbody>

    rows.forEach((row) => {
        const cells = row.querySelectorAll("td"); // Все ячейки в строке
        const match = Array.from(cells).some((cell) =>
            cell.textContent.toLowerCase().includes(filter) // Проверка наличия текста
        );
        row.style.display = match ? "" : "none"; // Показать или скрыть строку
    });
}

// Функция для добавления событий выделения столбцов
function addColumnHoverEffect() {
    const table = document.querySelector(".comparison-table");
    const headers = table.querySelectorAll("thead th"); // Заголовки столбцов
    const rows = table.querySelectorAll("tbody tr"); // Все строки таблицы

    headers.forEach((header, columnIndex) => {
        header.addEventListener("mouseover", () => highlightColumn(columnIndex, rows));
        header.addEventListener("mouseout", () => resetColumn(columnIndex, rows));
    });
}
const data = [
    // PlayStation
    {
        model: "PlayStation 5",
        cpu: "AMD Zen 2, 3.5 GHz",
        gpu: "AMD RDNA 2, 10.28 TFLOPS",
        ram: "16 GB GDDR6",
        rom: "825 GB SSD",
        uhd: true,
        games: ["Spider-Man", "Ratchet & Clank"],
        cost: "49 990 ₽"
    },
    {
        model: "PlayStation 4 Pro",
        cpu: "AMD Jaguar, 2.1 GHz",
        gpu: "AMD GCN, 4.2 TFLOPS",
        ram: "8 GB GDDR5",
        rom: "1 TB HDD",
        uhd: true,
        games: ["The Last of Us", "Uncharted 4"],
        cost: "34 990 ₽"
    },
    {
        model: "PlayStation 3",
        cpu: "Cell Broadband Engine, 3.2 GHz",
        gpu: "NVIDIA RSX, 0.4 TFLOPS",
        ram: "256 MB XDR",
        rom: "500 GB HDD",
        uhd: false,
        games: ["God of War III", "Metal Gear Solid 4"],
        cost: "14 990 ₽"
    },

    // Xbox
    {
        model: "Xbox Series X",
        cpu: "AMD Zen 2, 3.8 GHz",
        gpu: "AMD RDNA 2, 12 TFLOPS",
        ram: "16 GB GDDR6",
        rom: "1 TB SSD",
        uhd: true,
        games: ["Halo Infinite", "Forza Horizon 5"],
        cost: "45 990 ₽"
    },
    {
        model: "Xbox Series S",
        cpu: "AMD Zen 2, 3.6 GHz",
        gpu: "AMD RDNA 2, 4 TFLOPS",
        ram: "10 GB GDDR6",
        rom: "512 GB SSD",
        uhd: true,
        games: ["Sea of Thieves", "Minecraft"],
        cost: "29 990 ₽"
    },
    {
        model: "Xbox One X",
        cpu: "AMD Jaguar, 2.3 GHz",
        gpu: "AMD Polaris, 6 TFLOPS",
        ram: "12 GB GDDR5",
        rom: "1 TB HDD",
        uhd: true,
        games: ["Gears 5", "Red Dead Redemption 2"],
        cost: "24 990 ₽"
    },

    // Steam Deck
    {
        model: "Steam Deck 512GB",
        cpu: "AMD Zen 2, 2.4-3.5 GHz",
        gpu: "AMD RDNA 2, 1.6 TFLOPS",
        ram: "16 GB LPDDR5",
        rom: "512 GB SSD",
        uhd: false,
        games: ["Elden Ring", "Cyberpunk 2077"],
        cost: "64 990 ₽"
    },
    {
        model: "Steam Deck 256GB",
        cpu: "AMD Zen 2, 2.4-3.5 GHz",
        gpu: "AMD RDNA 2, 1.6 TFLOPS",
        ram: "16 GB LPDDR5",
        rom: "256 GB SSD",
        uhd: false,
        games: ["Dota 2", "Half-Life Alyx"],
        cost: "52 990 ₽"
    },
    {
        model: "Steam Deck 64GB",
        cpu: "AMD Zen 2, 2.4-3.5 GHz",
        gpu: "AMD RDNA 2, 1.6 TFLOPS",
        ram: "16 GB LPDDR5",
        rom: "64 GB eMMC",
        uhd: false,
        games: ["Portal 2", "Stardew Valley"],
        cost: "42 990 ₽"
    },

    // Nintendo
    {
        model: "Nintendo Switch",
        cpu: "ARM Cortex-A57, 1.02 GHz",
        gpu: "NVIDIA Tegra X1",
        ram: "4 GB LPDDR4",
        rom: "32 GB eMMC",
        uhd: false,
        games: ["The Legend of Zelda", "Super Mario Odyssey"],
        cost: "23 990 ₽"
    },
    {
        model: "Nintendo Switch Lite",
        cpu: "ARM Cortex-A57, 1.02 GHz",
        gpu: "NVIDIA Tegra X1",
        ram: "4 GB LPDDR4",
        rom: "32 GB eMMC",
        uhd: false,
        games: ["Animal Crossing", "Pokémon Sword"],
        cost: "16 990 ₽"
    },
    {
        model: "Nintendo 3DS",
        cpu: "Dual-Core ARM11 MPCore",
        gpu: "DMP PICA200",
        ram: "128 MB FCRAM",
        rom: "2 GB",
        uhd: false,
        games: ["Mario Kart 7", "Super Smash Bros"],
        cost: "12 990 ₽"
    }
];

function funcSort(sort)
{
    if (sort === "")
    {
        createTable(data);
    }
    else{
        const bufferData = new Array(...data);
        const lowerSearchValue = searchValue.toLowerCase();

    
        createTable(data.filter(item => {
            
            return Object.values(item).some(value => {
                
                if (Array.isArray(value)) {
                    return value.some(arrayItem =>
                        arrayItem.toLowerCase().includes(lowerSearchValue)
                    );
                }
                
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(lowerSearchValue);
                }
                return false;
            });
        }))
    }
}

function createTable(dataF)
{
    let elem = document.getElementById("table");
    elem.innerHTML = '';
    const bufferData = new Array(...dataF);
    bufferData.map((cons) => {
        let model = document.createElement("td");
        model.textContent = cons.model;

        let cpu = document.createElement("td");
        cpu.textContent = cons.cpu;

        let gpu = document.createElement("td");
        gpu.textContent = cons.gpu;

        let ram = document.createElement("td");
        ram.textContent = cons.ram;

        let rom = document.createElement("td");
        rom.textContent = cons.rom;

        let uhd = document.createElement("td");
        uhd.textContent = cons.uhd;

        let games = document.createElement("td");
        games.textContent = cons.games;

        let cost = document.createElement("td");
        cost.textContent = cons.cost;

        let buffer = document.createElement("tr");
        buffer.append(model);
        buffer.append(cpu);
        buffer.append(gpu);
        buffer.append(ram);
        buffer.append(rom);
        buffer.append(uhd);
        buffer.append(games);
        buffer.append(cost);
        elem.append(buffer);
    })
}

// Функция для выделения столбца
function highlightColumn(columnIndex, rows) {
    rows.forEach((row) => {
        const cell = row.cells[columnIndex];
        if (cell) {
            cell.style.backgroundColor = "#0056b3"; // Темно-синий фон
            cell.style.color = "#ffffff"; // Белый текст
        }
    });
}

// Функция для сброса выделения столбца
function resetColumn(columnIndex, rows) {
    rows.forEach((row) => {
        const cell = row.cells[columnIndex];
        if (cell) {
            cell.style.backgroundColor = ""; // Сброс цвета фона
            cell.style.color = ""; // Сброс цвета текста
        }
    });
}

// Инициализация функций после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    addColumnHoverEffect();
    createTable(data);
});


