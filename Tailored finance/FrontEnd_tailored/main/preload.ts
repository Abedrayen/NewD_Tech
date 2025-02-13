import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value)
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  }
}

contextBridge.exposeInMainWorld('ipc', handler)
contextBridge.exposeInMainWorld('electronAPI', {
  notifyLoginSuccess: () => ipcRenderer.send('login-success'),
  notifyLoginFailed:()=>ipcRenderer.send("login-failed"),
  notifyLogout: () => ipcRenderer.send('logout'),
});
export type IpcHandler = typeof handler
