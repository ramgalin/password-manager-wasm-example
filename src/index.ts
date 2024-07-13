import init from './password_manager.js';

function onReady(callback: () => void): void {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

async function initialize() {
    console.log('Initializing WebAssembly module...');
    const passwordManagerModule = await init({
        locateFile: (file: string) => `./${file}`
    });

    const { store_password, check_password } = passwordManagerModule;
    console.log('WebAssembly module initialized.');

    function addPassword(username: string, password: string) {
        store_password(username, password);
        console.log(`Password for ${username} has been stored.`);
    }

    function checkPassword(username: string, password: string) {
        const isValid = check_password(username, password);
        const resultElement = document.getElementById('check-result');
        if (isValid) {
            resultElement!.textContent = `Password for ${username} is correct.`;
        } else {
            resultElement!.textContent = `Password for ${username} is incorrect.`;
        }
    }

    onReady(() => {
        console.log('DOM fully loaded and parsed');

        // Event listener for the Add Password button
        document.getElementById('add-button')!.addEventListener('click', () => {
            const username = (document.getElementById('add-username') as HTMLInputElement).value;
            const password = (document.getElementById('add-password') as HTMLInputElement).value;
            addPassword(username, password);
            alert(`Password for ${username} has been stored.`);
        });

        // Event listener for the Check Password button
        document.getElementById('check-button')!.addEventListener('click', () => {
            const username = (document.getElementById('check-username') as HTMLInputElement).value;
            const password = (document.getElementById('check-password') as HTMLInputElement).value;
            checkPassword(username, password);
        });
    });
}

initialize();
