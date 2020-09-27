class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const arr = [];
        let keyStep = -1;
        for (let i = 0; i < message.length; i++) {
            if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
                keyStep++;
                let number = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[keyStep % key.length].toUpperCase())) % alphabet.length;
                arr.push(alphabet[number]);
            } else {
                arr.push(message[i])
            }
        }
        return this.direct ? arr.join('') : arr.reverse().join('');
    }
    decrypt(encryptedMessage, key) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const arr = [];
        let keyStep = -1;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (alphabet.indexOf(encryptedMessage[i].toUpperCase()) > -1) {
                keyStep++;
                let number = (alphabet.indexOf(encryptedMessage[i].toUpperCase()) + alphabet.length - alphabet.indexOf(key[keyStep % key.length].toUpperCase())) % alphabet.length;
                arr.push(alphabet[number])
            } else {
                arr.push(encryptedMessage[i])
            }
        }
        return this.direct ? arr.join('') : arr.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
