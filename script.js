//Etapa 1
console.log("JavaScript carregado!") // De cara console.log("JavaScript carregado!") Etapa 1 ok! Ver se o JS está realmente conectado ao HTML

//Etapa 2
const convertButton = document.querySelector(".convert") //Variavel Const criada para guardar o valor da classe (convert) do HTML, a mesma está sendo buscado pelo querySelector
console.log("funcionou?") //Imprimie no console a mensagem "funcionou?" se a ação da linha acima estiver correta

// Etapa 6...
const currencySelect = document.querySelector(".currency-select") // essa variavel da Etapa 6 está fora de ordem porque é necessario que ela seja declarada antes da função do botão, pois ela guarda o valor da escolha entre Dolar e Euro

function convertValues(){ //Primeira função que usei no Java Script, essa serve para guardar o evento click do botão Converter que está no HTML
    console.log("Funcionou!") //Essa linha serve para retornar no console se realmente a função está sendo acionada ao clicar no botão.
        
    //Etapa 3
    const inputCurrencyValue = document.querySelector(".input-currency").value //Cria uma variavel const que vai buscar no HTML somente valor que foi digitado na classe input-currency
    console.log(inputCurrencyValue) //imprime no console o valor guardado na variavel inputeCurrencyValue

//Etapa 6 continuação...
    console.log(currencySelect.value)

    //Etapa 4
    const dolarToday = 5.07 //variavel const criada para pegar o valor do dolar, no dia 06/04/2024 está a 5,07
    const euroToday = 5.50  //variavel const criada para pegar o valor do euro, no dia 06/04/2024 está a 5,50
    const convertedValueDolar = inputCurrencyValue/dolarToday //faz o cálculo de conversão de real pra dolar e guarda o valor na variavel convertedValueDolar
 //Etapa 7...   
    const convertedValueEuro = inputCurrencyValue/euroToday  //faz o cálculo de conversão de real pra EURO e guarda o valor na variavel convertedValueEuro
    console.log(convertedValueDolar) //imprime no console o valor da variavel convertedValue
    console.log("Converteu pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueEuro) //Imprime no console o valor da variael ConvertedValue
    console.log("Converteu pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
    
    
    //Etapa 5
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Variavel criada para guardar o valor digitado no paragrafo da classe currency-value-to-convert
     const currencyValueConverted = document.querySelector(".currency-value") // Variavel criada para guardar o valor digitado no paragrafo da classe currency-value
 
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Brasil já com mascara formatada") //Teste para verificar se a linha acima funcionou
 
     //currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueDolar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
     //console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
     // Alinha acima virou parte da Etapa 7

//Etapa 7 continuação...
    if(currencySelect.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueDolar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelect.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
}

//Etapa 8
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "Dollar"){
        currencyName.innerHTML = "Dólar  Americano"
        currencyImg.src = "./Assets/Dollar-EUA.jpg"
    }

    if(currencySelect.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.jpg"
    }
    convertValues()
    console.log("trocou de moeda")
}

currencySelect.addEventListener("change", changeCurrency)   

convertButton.addEventListener("click", convertValues)// Pega o valor da variavel ConvertButton e a coloca sobre o comando do AddEventListener, click nesse caso, ou seja, sempre que o botão for clicado ele addEventeListener irá chamar a função ConvertValues e vai executar o que estiver dentro dela que no caso é uma impressão no console com a mensagem: Funcionou!
