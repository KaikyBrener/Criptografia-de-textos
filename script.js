function filtrarEntrada() {
    const textarea = document.getElementById('textarea');
    
    textarea.addEventListener('input', function() {
        
        let value = textarea.value;

        
        value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        
        
        value = value.replace(/[^a-z\s]/g, '');

        
        textarea.value = value;
    });
}


filtrarEntrada();

function criptografar() {
    const inputText = document.getElementById('textarea').value;
    const outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

   
    document.getElementById('Resultado__Imagem').style.display = 'none';
    document.getElementById('Resultado__h1').style.display = 'none';
    document.getElementById('Resultado__p').style.display = 'none';

    
    const resultElement = document.getElementById('Resultado__final');
    resultElement.textContent = outputText;
    resultElement.style.display = 'block'; 

    
    document.getElementById('buttom__copiar').style.display = 'block';
}

function descriptografar() {
    const inputText = document.getElementById('textarea').value;
    const outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

  
    document.getElementById('Resultado__Imagem').style.display = 'none';
    document.getElementById('Resultado__h1').style.display = 'none';
    document.getElementById('Resultado__p').style.display = 'none';

    
    const resultElement = document.getElementById('Resultado__final');
    resultElement.textContent = outputText;
    resultElement.style.display = 'block'; 
    
    document.getElementById('buttom__copiar').style.display = 'block';
}

function copiarTexto() {
    const outputText = document.getElementById('Resultado__final');
    outputText.select(); 
    document.execCommand('copy'); 
    alert('Texto copiado para a área de transferência!');
}
