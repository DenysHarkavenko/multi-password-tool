let shell: typeof import('electron').shell;

if (window.require) {
    const electron = window.require('electron');
    shell = electron.shell;
}

export const openExternalLink = (url: string): void => {
    if (shell) {
        shell.openExternal(url);
    } else {
        window.open(url);
    }
};
