#include <string>
#include <unordered_map>
#include <emscripten/bind.h>

std::unordered_map<std::string, std::string> password_storage;

std::string encrypt_decrypt(const std::string& password) {
    std::string key = "simplekey"; // Simple key for XOR encryption
    std::string result = password;

    for (size_t i = 0; i < password.size(); ++i) {
        result[i] ^= key[i % key.size()];
    }
    return result;
}

void store_password(const std::string& username, const std::string& password) {
    std::string encrypted_password = encrypt_decrypt(password);
    password_storage[username] = encrypted_password;
}

bool check_password(const std::string& username, const std::string& password) {
    if (password_storage.find(username) != password_storage.end()) {
        std::string decrypted_password = encrypt_decrypt(password_storage[username]);
        return decrypted_password == password;
    }
    return false;
}

EMSCRIPTEN_BINDINGS(password_manager) {
    emscripten::function("store_password", &store_password);
    emscripten::function("check_password", &check_password);
}
