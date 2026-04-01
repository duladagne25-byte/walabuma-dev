// ==================== USER DATABASE ====================
let users = [];

function loadUsersFromStorage() {
    const stored = localStorage.getItem('walabuma_users');
    if(stored) {
        users = JSON.parse(stored);
    } else {
        users = [
            { id: Date.now() + 1, firstName: "Alemu", lastName: "Bekele", email: "alemu@walabuma.com", phone: "+251 911 234 567", password: "******", gender: "Male", country: "Ethiopia", region: "Addis Ababa", city: "Addis Ababa", birthPlace: "Gondar", courseInterest: "JavaScript Core", dob: "1990-05-15" },
            { id: Date.now() + 2, firstName: "Tigist", lastName: "Desta", email: "tigist@walabuma.com", phone: "+251 922 345 678", password: "******", gender: "Female", country: "Ethiopia", region: "Oromia", city: "Jimma", birthPlace: "Shambu", courseInterest: "React.js Ecosystem", dob: "1995-08-22" }
        ];
        saveUsersToStorage();
    }
    updateAdminUI();
}

function saveUsersToStorage() {
    localStorage.setItem('walabuma_users', JSON.stringify(users));
    updateAdminUI();
}

function generateId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

function addUser(userData) {
    const newUser = {
        id
