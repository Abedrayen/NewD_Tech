import path from 'path';
import { app, BrowserWindow, ipcMain, screen } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import loginimg from "./login.png"
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

function getResourcePath(resourceName) {
  const basePath = app.isPackaged
    ? path.join(process.resourcesPath) // In production
    : path.join(__dirname); // In development

  return path.join(basePath, resourceName);
}
const iconPath = getResourcePath('login.png'); // Access `login.png` in the `resources` folder
console.log('Resource Path:', iconPath);

let mainWindow;

app.on('ready', () => {
  // Create the initial BrowserWindow for login
  mainWindow = new BrowserWindow({
    width: 400, // Default login window size
    height: 600,
    // frame: true, // Hide the OS frame
    roundedCorners: false, // Enable rounded corners // Allow transparency for rounded corners
    alwaysOnTop: true,
    resizable: false, // Prevent resizing for login
    center: true,
    title:"Loading...",
    titleBarOverlay:true,
    // movable:true,
    // backgroundMaterial:"tabbed",

    paintWhenInitiallyHidden:false,
    

    autoHideMenuBar: true, // Hide menu bar initially
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  mainWindow.webContents.openDevTools()
  const loginUrl = isProd ? 'app://./' : 'http://localhost:8888/';
  mainWindow.loadURL(loginUrl); // Load the login page
});


ipcMain.on('login-failed', () => {
  if (mainWindow) {
   
    mainWindow.setTitle("Login")
    mainWindow.webContents.openDevTools()

  }
});

// Handle login-success event
ipcMain.on('login-success', () => {
  if (mainWindow) {
    // Get screen dimensions for full width and height
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Resize the window to full screen dimensions
    mainWindow.setBounds({
      x: 0,
      y: 0,
      width,
      height,
    });

    mainWindow.setResizable(true); // Allow resizing after login
    mainWindow.center(); // Center the window
    // const appUrl = isProd ? 'app://./' : 'http://localhost:8888/dashboard';
    // mainWindow.loadURL(appUrl); // Load the main app
    mainWindow.setMenuBarVisibility(false); // Hide menu bar
    mainWindow.setTitle("Tailored Finance")
    mainWindow.setFullScreenable(true)
    mainWindow.webContents.openDevTools()

  }
});

// Handle logout event
ipcMain.on('logout', () => {
  if (mainWindow) {
    // Resize back to the login window size
    mainWindow.setBounds({
      width: 400,
      height: 600,
      x: 0,
      y: 0,
    });
    mainWindow.setResizable(false); // Disable resizing for login
    mainWindow.center(); // Center the window
    const loginUrl = isProd ? 'app://./SignIn' : 'http://localhost:8888/SignIn';
    mainWindow.loadURL(loginUrl); // Load the login page
    mainWindow.setMenuBarVisibility(true); // Show menu bar
  }
});

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
