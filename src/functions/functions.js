import { TRADING } from './classes.js';

// Constantes et letiables
const LOCAL_STORAGE_KEYS = {
    CURRENT_BALANCE: "currentBalance",
    TRADING: "trading",
    BUDGET: "budget",
    EXPENSE_MONTH: "month_expense"
};

const TRANSACTION_TYPE = {
    ENTREE: "entrée",
    SORTIE: "sortie"
};

let trading;
let currentBalance;
let budget;

// Fonctions

// Récupère une valeur dans le localStorage
const getFromLocalStorage = function (key) {
    const data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data); // Parse la chaîne JSON en objet JavaScript
    } else {
        console.error("L'élément n'existe pas dans le local storage");
        return false;
    }
}

// Modifie une valeur dans le localStorage, ou crée un objet
const setOnLocalStorage = function (key, value, modify = true) {
    if (localStorage.getItem(key) !== null && !modify) {
        console.error("La clé existe déjà dans le local storage");
    } else {
        localStorage.setItem(key, JSON.stringify(value)); // Convertit l'objet en chaîne JSON avant de l'enregistrer
    }
}

// Fonction pour ajouter un nouveau trade
const addTrade = function (name, rising, date, place, category, type) {
    const newTrade = new TRADING(name, rising, date, place, category, type);
    let tradeLocal = getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING);
    tradeLocal.push(newTrade);
    setOnLocalStorage(LOCAL_STORAGE_KEYS.TRADING, tradeLocal); 
    updateBalance(rising, type)
}

const updateBalance = function (rising, type) {
    if (type === TRANSACTION_TYPE.ENTREE){ 
    currentBalance += rising
    setOnLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE, currentBalance, true)
    } else if (type === TRANSACTION_TYPE.SORTIE) {
        currentBalance -= rising
        setOnLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE, currentBalance, true)

    }
}

const addBudget = function (budget) {
    setOnLocalStorage(LOCAL_STORAGE_KEYS.BUDGET, budget, true)
}

// Initialisation
if (!getFromLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE)) {
    setOnLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE, 0);
    currentBalance = getFromLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE);
    console.log("currentBalance créé : ", currentBalance);
} else {
    currentBalance = getFromLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE);
    console.log("currentBalance déjà prêt : ", currentBalance);
}

if (!getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING)) {
    setOnLocalStorage(LOCAL_STORAGE_KEYS.TRADING, []);
    trading = getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING);
} else {
    trading = getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING);
}

if (!getFromLocalStorage(LOCAL_STORAGE_KEYS.EXPENSE_MONTH)) {
    setOnLocalStorage(LOCAL_STORAGE_KEYS.EXPENSE_MONTH, 0);
    expense_month = getFromLocalStorage(LOCAL_STORAGE_KEYS.EXPENSE_MONTH);
} else {
    trading = getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING);
}

addTrade("Salaire", 1200, Date.now(), "Marseille", "salaire", TRANSACTION_TYPE.SORTIE)
console.log(getFromLocalStorage(LOCAL_STORAGE_KEYS.TRADING))
console.log(getFromLocalStorage(LOCAL_STORAGE_KEYS.CURRENT_BALANCE))