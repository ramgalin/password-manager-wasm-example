import init from './password_manager.js';

async function initialize() {
    const passwordManagerModule = await init({
        locateFile: (file: string) => `./${file}`
    });

    const { store_password, retrieve_password, check_password } = passwordManagerModule;

    store_password('user1', 'mypassword');
    const password = retrieve_password('user1');
    console.log(password);
}

initialize();
