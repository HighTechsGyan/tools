 function escapeHtml(text) {
            var map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, function (m) { return map[m]; });
        }
    
 function convertToEntities() {
  var inputText = document.getElementById("input").value;
  var convertedText = escapeHtmltool(inputText);
  document.getElementById("output").value = convertedText;
}

function escapeHtmltool(text) {
  return text.replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
}
// ... (existing functions) ...

function entitiescopy() {
  var outputText = document.getElementById("output").value;

  var textarea = document.createElement("textarea");
  textarea.value = outputText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

 
}
