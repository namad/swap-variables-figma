import "./styles/source-variables.css";
import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/dialog.css";

import "./helpers/modal";

let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let swapVariablesButton = document.getElementById('swapVariablesButton') as HTMLButtonElement;
let reloadStoreButton = document.getElementById('reloadStore') as HTMLButtonElement;

let fileName;

const state = {
    
}

// importButton.addEventListener('click', (e) => {
//     const fileNameInput = document.querySelector('#importModal input[name=fileName]') as HTMLInputElement;
//     parent.postMessage({
//         pluginMessage: { type: 'COLLECT_VARS', fileName: fileNameInput.value }
//     }, "*");
// });

reloadStoreButton.addEventListener('click', (e) => {
    parent.postMessage({
        pluginMessage: { type: 'VARS_UI_LOADED' }
    }, "*");
})

swapVariablesButton.addEventListener('click', (e) => {
    const radioButton = document.querySelector('#presetsList input[type=radio]:checked') as HTMLInputElement
    const key = radioButton?.value || null;
    const overrideTextStylesCheckbox = document.querySelector('input[name=overrideTextStyles]') as HTMLInputElement;
    const overrideTextStyles = overrideTextStylesCheckbox.checked;

    const modal = document.getElementById('swapModal') as HTMLDialogElement;
    const swapProgressMsg = document.getElementById('swapProgress') as HTMLDivElement;
    swapProgressMsg.innerHTML = 'Working...';

    key && modal.showModal();

    parent.postMessage({
        pluginMessage: { type: 'SWAP_VARIABLES', fileName: key, overrideTextStyles }
    }, "*");
})

// window.addEventListener('message', ({ data: { pluginMessage } ) => {
//     console.log(e);
// })


window.onmessage = async ({ data: { pluginMessage } }) => {

    if (pluginMessage.event == 'SYNC_VARS') {
        renderList(pluginMessage.data);

        document.querySelectorAll('dialog').forEach((modal: HTMLDialogElement) => {
            modal.close();
        });
    }

    if(pluginMessage.event == 'SWAP_VARIABLES_DONE') {
        const modal = document.getElementById('swapModal') as HTMLDialogElement;
        modal.close();
    }

    if(pluginMessage.event == 'SWAP_VAR_PROGRESS') {
        const swapProgressMsg = document.getElementById('swapProgress') as HTMLDivElement;
        swapProgressMsg.innerHTML = pluginMessage.message + '...';
    }


};

interface StoredData {
    [key: string]: LibraryVariable[]
}

function renderList(storedData: StoredData) {
    const markup = [];
    const entries = Object.entries(storedData);

    entries.forEach(([fileKey, value]) => {
        markup.push(`
            <label class="theme-item">
                <input type="radio" name="theme" value="${fileKey}" />
                <div class="flex-1 flex flex-col px-base py-minor-base gap-minor-xs">
                    <span class="flex flex-row items-baseline justify-between">
                        <div class="text-sm" title="${fileKey}">${fileKey}</div>
                    </span>
                </div>
            </label>`);
    })

    if(!markup.length) {
    }

    const listboxElement = document.getElementById('presetsList')
    listboxElement.innerHTML = markup.join('');
}

parent.postMessage({
    pluginMessage: { type: 'VARS_UI_LOADED' }
}, "*");