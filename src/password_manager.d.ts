declare module './password_manager.js' {
    export function store_password(username: string, password: string): void;
    export function retrieve_password(username: string): string;
    export function check_password(username: string, password: string): boolean;

    interface Module {
        store_password: (username: string, password: string) => void;
        retrieve_password: (username: string) => string;
        check_password: (username: string, password: string) => boolean;
    }

    export default function init(config: { locateFile: (file: string) => string }): Promise<Module>;
}
