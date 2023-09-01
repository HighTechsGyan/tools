
    function generatetableinhtml() {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);
  let tableHTML = '<table>';
  for (let i = 0; i < rows; i++) {
    tableHTML += '<tr>';
    for (let j = 0; j < columns; j++) {
      tableHTML += `<td><input type="text" placeholder="Enter details" class="table-input"></td>`;
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';
  document.getElementById("table-container").innerHTML = tableHTML;
}
function generatehtmltable() {
  const tableRows = document.querySelectorAll("tr");
  let html = "&lt;table&gt;&lt;tbody&gt;";
  tableRows.forEach((row) => {
    const cells = row.querySelectorAll(".table-input");
    html += "&lt;tr&gt;";
    cells.forEach((cell) => {
      const content = cell.value.trim();
      if (content.startsWith("http://") || content.startsWith("https://")) {
        const url = new URL(content);
        const hostnameParts = url.hostname.split(".");
        const domain = hostnameParts[hostnameParts.length - 2]; // Get the second-to-last part
        html += `&lt;td&gt;&lt;a href="${content}"&gt;${domain}&lt;/a&gt;&lt;/td&gt;`;
      } else {
        html += `&lt;td&gt;${content}&lt;/td&gt;`;
      }
    });
    html += "&lt;/tr&gt;";
  });
  html += "&lt;/tbody&gt;&lt;/table&gt;";
  document.getElementById("output-container").innerHTML = `<pre>${html}</pre>`;
}
function copytoclipboardtablehtml() {
  const outputContainer = document.getElementById("output-container");
  const range = document.createRange();
  range.selectNode(outputContainer);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("HTML code copied to clipboard!");
}
    
