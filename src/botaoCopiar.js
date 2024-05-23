    document.querySelectorAll('.copyButton').forEach(function(button) {
        button.addEventListener('click', function() {
            var code = this.previousElementSibling.innerText;
            var textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Código copiado para a área de transferência!');
        });
    });
