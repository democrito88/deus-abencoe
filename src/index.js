import {darkmode} from './darkmode.js';
import { mascaraCNPJ, mascaraCPF, mascaraIPv4, mascaraMoeda } from './mascaras.js';

const toggleButton = document.getElementById('darkmode-toggle');
toggleButton? darkmode(toggleButton) : "";

const cpfInputs = document.getElementsByClassName('mascara-cpf');
Array.from(cpfInputs).forEach(input => mascaraCPF(input));

const cnpjInputs = document.getElementsByClassName('mascara-cnpj');
Array.from(cnpjInputs).forEach(input => mascaraCNPJ(input));

const moedaInputs = document.getElementsByClassName('mascara-moeda');
Array.from(moedaInputs).forEach(input => mascaraMoeda(input));

const ipv4Inputs = document.getElementsByClassName('mascara-ipv4');
Array.from(ipv4Inputs).forEach(input => mascaraIPv4(input));
