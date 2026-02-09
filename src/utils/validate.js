export const checkValidData = (email, password, name) => {

    const isNameValid = !name || /^[A-Za-z][A-Za-z\s'-]{1,}$/.test(name);

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    const errors = {};

    if (!isNameValid) errors.name = "Name must contain only letters and be at least 2 characters"
    if (!isEmailValid) errors.email = "Email is not valid";
    if (!isPasswordValid) errors.password = "Password must be 8+ characters, include uppercase, lowercase, and number";
    return errors;
};
