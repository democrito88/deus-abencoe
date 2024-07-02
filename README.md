# Deus Abençõe! 🙌

![Version](https://img.shields.io/badge/v1.0.0-%23d5a903.svg?style=for-the-badge)
![License](https://img.shields.io/badge/mit-%2335a439.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Colaborators](https://img.shields.io/badge/colaborators-2-%23c93333.svg?style=for-the-badge)
![Dependecies](https://img.shields.io/badge/dependencies-1-%23d5a903.svg?style=for-the-badge)

O seu pacote de utilitários para formulários especialmente desenvolvidos para dev-brs! 🇧🇷


Neste pacote você vai encontrar:
#### Máscaras
- CPF
- CNPJ
- IPv4
- IPv6 
- monetária
- telefone
- CEP

#### Validadores
- CPF
- CNPJ
- CEP

### Instalação
```
npm i democrito88/deus-abencoe
```

### Uso


#### Botão Darkmode
```
<input type="checkbox" id="darkmode-toggle" class="botao-toggle" />
<label for="darkmode-toggle" class="espaco-toggle">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun sun" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zM4.636 4.636a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707L4.636 5.343a.5.5 0 0 1 0-.707zm6.364 6.364a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L10.293 11.7a.5.5 0 0 1 0-.707zM0 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 8zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM4.636 11.7a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 1 1-.707.707L4.636 12.407a.5.5 0 0 1 0-.707zm6.364-6.364a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 1 1-.707.707L10.293 5.343a.5.5 0 0 1 0-.707z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon moon" viewBox="0 0 16 16">
<path d="M6 .278a.77.77 0 0 1 1.08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277a7.277 7.277 0 0 0 2.77-.792.77.77 0 0 1 1.163.69A8 8 0 1 1 6 .278z"/>
</svg>
</label>
```

#### Máscaras de inputs

Chame a classe no input
```
<input type="text" class="nomeDaClasse">
```

|Máscara  |Nome da classe |
|---------|---------------|
|CPF      |mascara-cpf    |
|CNPJ     |mascara-cnpj   |
|IPv4     |mascara-ipv4   |
|IPv6     |mascara-ipv6   |
|CEP      |mascara-cep    |
|monetária|valor-monetario|

#### Validadores

Use o seguinte formato
```
<!--Para chamar o input-->
<input type="text" class="classeInput" autocomplete="off">
<br>
<!--small para mostrar menssagem de erro.-->
<small id="classeSmall" class="invalid-feedback"></small>
```

|Validador|Classe do input|Classe do small|
|---------|---------------|---------------|
|CPF      |valida-cpf     |cpf-message    |
|CNPJ     |valida-cnpj    |cnpj-message   |

#### Buscar endereço a partir do CEP
Ferramenta para autocompletar endereço no formulário a partir de um CEP utilizando a API dos Correios [__ViaCEP__](https://viacep.com.br/).

```
<!--Para chamar o input-->
<label for="cep">Busca por CEP:</label>
<input type="text" size="60" class="busca-cep" id="cep" /><br />
<label for="rua">Rua:</label>
<input name="rua" type="text" id="rua" class="endereco rua" size="60" /><br />
<label for="bairro">Bairro:</label>
<input name="bairro" type="text" id="bairro" class="endereco bairro" size="40" /><br />
<label for="cidade">Cidade:</label>
<input name="cidade" type="text" id="cidade" class="endereco cidade" size="40" /><br />
<label for="uf">Estado:</label>
<input name="uf" type="text" id="uf" size="2" class="endereco uf" /><br />
<label for="ibge">Codigo Ibge:</label>
<input name="ibge" type="text" id="ibge" size="20" class="endereco ibge" /><br />
<br>
<!--small para mostrar menssagem de erro.-->
<small class="cep-message"></small>
```

#### Outros

|Nome|Descrição|Exemplo|
|----|---------|-------|
|Datetime Input|calendário Flatpickr de data e hora| ```<input type="datetime-local" class="data-hora">```|
|Removedor de máscaras|remove máscaras de cpf e cnpj, deixando apenas números|```<input type="text" class="apenasNumeros">```|
|Seletor de cores|Ferramenta de seleção de cor. Uma implementação da ferramenta da Momo Bassit Coloris| ```<link rel="stylesheet" href="./../node_modules/@melloware/coloris/dist/coloris.min.css" /><script src="./../node_modules/@melloware/coloris/dist/esm/coloris.min.js"></script><script type="text/javascript">setInstance('.instance1', {theme: 'pill',formatToggle: true,closeButton: true,clearButton: true,swatches: ['#067bc2','#84bcda','#80e377','#ecc30b','#f37748','#d56062']});</script><div class="clr-field"><button type="button" aria-labelledby="clr-open-label"></button><input id="coloris" class="coloris instance1" type="text" data-coloris></div>```|

Para mais dxetalhes, veja a [página de exemplos](examples/index.html)

### Autores
- [Demócrito d'Anunciação](https://github.com/democrito88/)
- [Luiz Fernando](https://github.com/luizfernando1176/)

Special thanks to [FlatPickr](https://flatpickr.js.org) and [Momo Bassit Coloris](https://coloris.js.org/)