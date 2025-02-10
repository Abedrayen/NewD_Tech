import { screen, BrowserWindow, BrowserWindowConstructorOptions, Rectangle } from 'electron';
import Store from 'electron-store';


export const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store<Rectangle>({ name });
  const defaultSize = {
    width: options.width || 800,
    height: options.height || 600,
  };

  let state = {};

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    });
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  // Get the restored position or default
  state = restore();

  const win = new BrowserWindow({
    ...state,
    ...options,
    minHeight:1000,
    minWidth:500,
    x:0,
    y:0,
    icon:__dirname + '/tailored/resources/icon.ico',
    width: screen.getPrimaryDisplay().workArea.width,   
  height: screen.getPrimaryDisplay().workArea.height,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      ...options.webPreferences,
    },
  });
  
  console.log('Icon Path:', __dirname + '/resources/icon.ico');
  console.log('Icon Path:', __dirname + '/resources/icon.ico');


  win.on('close', saveState);

  return win;
};
