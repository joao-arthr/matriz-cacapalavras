matrizcores = [
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
//rust, php, ruby, java, python, javascript, go, cpp, csharp, elixir

matriz = [
    ["r", "u", "s", "t", "a", "r", "u", "b", "y", "t"],
    ["c", "o", "m", "p", "b", "a", "o", "o", "u", "c"],
    ["p", "j", "j", "p", "g", "o", "i", "e", "g", "s"],
    ["h", "a", "ç", "c", "p", "p", "s", "l", "a", "h"],
    ["p", "v", "m", "p", "a", "s", "e", "i", "u", "a"],
    ["c", "a", "m", "p", "a", "a", "s", "x", "g", "r"],
    ["p", "u", "t", "j", "m", "a", "w", "i", "a", "p"],
    ["w", "r", "v", "a", "s", "t", "u", "r", "p", "t"],
    ["p", "y", "t", "h", "o", "n", "w", "x", "r", "p"],
    ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"],
];

function mostrarCacaPalavras() {
    for (linha = 0; linha < 10; linha++) {
        for (coluna = 0; coluna < 10; coluna++) {
            (matrizcores[linha][coluna] == 1) ? cor = "#ffba00": cor = "#ffffff";
            document.write("<td bgcolor=" + cor + ">")
            document.write(matriz[linha][coluna]);
            document.write("</td>")
        }
        document.write("</tr>")
    }
}