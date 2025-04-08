function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0) {
        return `(At least 1 set of character need to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function updatePasswordDisplay() {
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLength, 
                                      includeLowercase, 
                                      includeUppercase, 
                                      includeNumbers, 
                                      includeSymbols);

    document.getElementById("password-display").textContent = `Generated password: ${password}`;
}

// Initialize password on page load
updatePasswordDisplay();

// Add event listener to button for generating a new password
document.getElementById("generate-password-btn").addEventListener("click", updatePasswordDisplay);
