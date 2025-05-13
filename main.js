// Importa módulos app e BriwserWindow do Electron
const { app, BrowserWindow } = require("electron");

// Função para criar a janela principal
function createWindow() {

    // Criar uma nova instancia dp BrowserWindow
    const window = new BrowserWindow({
        width: 800, // Largura da janela
        height: 600, //Altura da janela
    })

    // Carregar o arquivo HTML na janela
    window.loadFile('src/pages/index.html')

}

// Evento que é acionado quando Electron está pronto
app.whenReady().then( () => {
    createWindow(); // Chama função de criar a janela
} )