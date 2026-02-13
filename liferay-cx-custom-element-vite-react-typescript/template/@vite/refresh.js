import RefreshRuntime from '/@react-refresh'

/**
 * @description This file is used ONLY and EXCLUSIVE for development
 */

RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type

window.__vite_plugin_react_preamble_installed__ = true
