
function convertir() {
    let re = 0
    let res = []
    // OCTAL--DECIMAL
    if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "decimal2") {
        let numero = document.getElementById("numero").value;
        let c = 0
        let d = 0
        let arr = []
        for (let i = numero.length - 1; i >= 0; i--) {
            p = parseInt(numero[i]) * Math.pow(8, c)
            c++;
            d = d + p
            arr.push(d)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
    }
    // decimal--octal
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "octal2") {
        let pedirNum = document.getElementById("numero").value;
        let division = pedirNum;
        while (division > 0) {
            re = division % 8
            division = Math.trunc(division / 8)
            res.push(re)
        }
        let invertido = res.reverse()
        let concatenado = invertido.join('')
        document.getElementById("resultado").innerHTML = concatenado
    }

    // decimal--hexadecimal 
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "hexadecimal2") {
        let pedirNum = document.getElementById("numero").value;
        let division = pedirNum;
        while (division > 0) {
            re = division % 16
            division = Math.trunc(division / 16)
            res.push(re)
            if (re == 10) {
                const indice = res.indexOf(10);
                res[indice] = 'A';
            }
            if (re == 11) {
                const indice = res.indexOf(11);
                res[indice] = 'B';
            }
            if (re == 12) {
                const indice = res.indexOf(12);
                res[indice] = 'C';
            }
            if (re == 13) {
                const indice = res.indexOf(13);
                res[indice] = 'D';
            }
            if (re == 14) {
                const indice = res.indexOf(14);
                res[indice] = 'E';
            }
            if (re == 15) {
                const indice = res.indexOf(15);
                res[indice] = 'F';
            }
        }
        let invertido = res.reverse()
        let concatenado = invertido.join('')
        document.getElementById("resultado").innerHTML = concatenado
    }
    // HEXADECIMAL--DECIMAL
    if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "decimal2") {
        let a = 0
        let p = 0
        let c = 0
        let d = 0
        let arr = []
        let num = document.getElementById("numero").value;
        re = num
        for (let i = 0; i < re.length; i++) {
            if (re[i] == "A") {
                res.push(10)
            }
            else if (re[i] == "B") {
                res.push(11)
            }
            else if (re[i] == "C") {
                res.push(12)
            }
            else if (re[i] == "D") {
                res.push(13)
            }
            else if (re[i] == "E") {
                res.push(14)
            }
            else if (re[i] == "F") {
                res.push(15)
            } else {
                a = parseInt(re[i])
                res.push(a)
            }
        }
        for (let i = res.length - 1; i >= 0; i--) {
            p = res[i] * Math.pow(16, c)
            c++;
            d = d + p
            arr.push(d)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
    }
    // decimal--binario
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "binario2") {
        let pedirNum = document.getElementById("numero").value;
        let division = pedirNum;
        while (division > 0) {
            re = division % 2
            division = Math.trunc(division / 2)
            res.push(re)
        }
        let invertido = res.reverse()
        let concatenado = invertido.join('')
        document.getElementById("resultado").innerHTML = concatenado
    }
    // BINARIO--DECIMAL
    if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "decimal2") {
        let numero = document.getElementById("numero").value;
        let x = 0
        let y = 0
        let xy = []
        for (let i = numero.length - 1; i >= 0; i--) {
            z = parseInt(numero[i]) * Math.pow(2, x)
            x++;
            y = y + z
            xy.push(y)
        }
        let ultimo = xy[xy.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
    }
    // octal--hexadecimal 
    if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "hexadecimal2") {
        let conted = 0
        let partes1 = 4
        let i = 0
        let div = []
        let div1 = []
        let div2 = []
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero;
        for (let l = 0; l < conted.length; l++) {
            let a = parseInt(conted[l]);
            div1.push(a);
        }
        for (let j = 0; j < div1.length; j++) {
            if (div1[j] == 0) {
                div.push(0, 0, 0)
            }
            else if (div1[j] == 1) {
                div.push(0, 0, 1)
            }
            else if (div1[j] == 2) {
                div.push(0, 1, 0)
            }
            else if (div1[j] == 3) {
                div.push(0, 1, 1)
            }
            else if (div1[j] == 4) {
                div.push(1, 0, 0)
            }
            else if (div1[j] == 5) {
                div.push(1, 0, 1)
            }
            else if (div1[j] == 6) {
                div.push(1, 1, 0)
            }
            else if (div1[j] == 7) {
                div.push(1, 1, 1)
            }
            else {
                alert("El numero debe ser un octal entero")
            }
        }
        for (let k = 0; k < div.length; k++) {
            let a = div[k]
            div2.push(a);
        }
        console.log(`binario` + div2);
        let residuo = parseInt(div2.length % 4)
        if (residuo == 3) {
            div2.unshift("0")
        }
        if (residuo == 2) {
            div2.unshift("0", "0")
        } if (residuo == 1) {
            div2.unshift("0", "0", "0")
        }
        for (i = 0; i < div2.length; i += partes1) {
            let part = div2.slice(i, i + partes1)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                octales.unshift("0")
            } else if (part == "0001") {
                octales.unshift("1")
            } else if (part == "0010") {
                octales.unshift("2")
            } else if (part == "0011") {
                octales.unshift("3")
            } else if (part == "0100") {
                octales.unshift("4")
            } else if (part == "0101") {
                octales.unshift("5")
            } else if (part == "0110") {
                octales.unshift("6")
            } else if (part == "0111") {
                octales.unshift("7")
            }
            else if (part == "1000") {
                octales.unshift("8")
            }
            else if (part == "1001") {
                octales.unshift("9")
            }
            else if (part == "1010") {
                octales.unshift("A")
            }
            else if (part == "1011") {
                octales.unshift("B")
            }
            else if (part == "1100") {
                octales.unshift("C")
            }
            else if (part == "1101") {
                octales.unshift("D")
            }
            else if (part == "1110") {
                octales.unshift("E")
            }
            else if (part == "1111") {
                octales.unshift("F")
            }
        }
        octales.reverse();
        let concat = octales.join("")
        document.getElementById("resultado").innerHTML = concat
    }
    // OCTAL--BINARIO
    if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "binario2") {
        let conted = 0
        let div = []
        let div1 = []
        let div2 = []
        let numero = document.getElementById("numero").value;
        conted = numero;
        for (let l = 0; l < conted.length; l++) {
            let a = parseInt(conted[l]);
            div1.push(a);
        }
        for (let j = 0; j < div1.length; j++) {
            if (div1[j] == 0) {
                div.push(0, 0, 0)
            }
            else if (div1[j] == 1) {
                div.push(0, 0, 1)
            }
            else if (div1[j] == 2) {
                div.push(0, 1, 0)
            }
            else if (div1[j] == 3) {
                div.push(0, 1, 1)
            }
            else if (div1[j] == 4) {
                div.push(1, 0, 0)
            }
            else if (div1[j] == 5) {
                div.push(1, 0, 1)
            }
            else if (div1[j] == 6) {
                div.push(1, 1, 0)
            }
            else if (div1[j] == 7) {
                div.push(1, 1, 1)
            }
            else {
                alert("El numero debe ser un octal entero")
            }
        }
        for (let k = 0; k < div.length; k++) {
            let a = div[k]
            div2.push(a);
        }
        let concatenar = div2.join('')
        document.getElementById("resultado").innerHTML = concatenar
    }
    // HEXADECIMAL--OCTAL

    if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "octal2") {
        let conted = 0
        let div2 = []
        let partes = 3
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero
        console.log(conted);
        for (let i = 0; i < conted.length; i++) {
            let unidad = conted[i]
            unidad.split("")
            if (unidad == "0") {
                octales.push("0000")
            } else if (unidad == "1") {
                octales.push("0001")
            } else if (unidad == "2") {
                octales.push("0010")
            } else if (unidad == "3") {
                octales.push("0011")
            } else if (unidad == "4") {
                octales.push("0100")
            } else if (unidad == "5") {
                octales.push("0101")
            } else if (unidad == "6") {
                octales.push("0110")
            } else if (unidad == "7") {
                octales.push("0111")
            } else if (unidad == "8") {
                octales.push("1000")
            } else if (unidad == "9") {
                octales.push("1001")
            } else if (unidad === "A") {
                octales.push("1010")
            } else if (unidad === "B") {
                octales.push("1011")
            } else if (unidad === "C") {
                octales.push("1100")
            } else if (unidad === "D") {
                octales.push("1101")
            } else if (unidad === "E") {
                octales.push("1110")
            } else if (unidad === 'F') {
                octales.push("1111")
            } else {
                console.log("aqui entro");
            }
        }
        for (let k = 0; k < octales.length; k++) {
            let a = octales[k]
            a.split("")
            div2.push(a);
        }
        console.log("DIV2= " + div2);

    }

    // BINARIO--OCTAL
    if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "octal2") {
        let conted = 0
        let partes1 = 3
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero.split("");
        let residuo = parseInt(conted.length % 3)
        if (residuo == 2) {
            conted.unshift("0")
        } if (residuo == 1) {
            conted.unshift("0", "0")
        }
        for (i = 0; i < conted.length; i += partes1) {
            let part = conted.slice(i, i + partes1)
            part = part.join("")
            if (part == "000") {
                octales.unshift("0")
            } else if (part == "001") {
                octales.unshift("1")
            } else if (part == "010") {
                octales.unshift("2")
            } else if (part == "011") {
                octales.unshift("3")
            } else if (part == "100") {
                octales.unshift("4")
            } else if (part == "101") {
                octales.unshift("5")
            } else if (part == "110") {
                octales.unshift("6")
            } else if (part == "111") {
                octales.unshift("7")
            } else {
                console.log("entro aqui");
            }
        }
        octales.reverse();
        let concat = octales.join("")
        document.getElementById("resultado").innerHTML = concat
    }
    // HEXADECIMAL--BINARIO

    if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "binario2") {
        let conted = 0
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero
        console.log(conted);
        for (let i = 0; i < conted.length; i++) {
            let unidad = conted[i]
            unidad.split("")
            if (unidad == "0") {
                octales.push("0000")
            } else if (unidad == "1") {
                octales.push("0001")
            } else if (unidad == "2") {
                octales.push("0010")
            } else if (unidad == "3") {
                octales.push("0011")
            } else if (unidad == "4") {
                octales.push("0100")
            } else if (unidad == "5") {
                octales.push("0101")
            } else if (unidad == "6") {
                octales.push("0110")
            } else if (unidad == "7") {
                octales.push("0111")
            } else if (unidad == "8") {
                octales.push("1000")
            } else if (unidad == "9") {
                octales.push("1001")
            } else if (unidad === "A") {
                octales.push("1010")
            } else if (unidad === "B") {
                octales.push("1011")
            } else if (unidad === "C") {
                octales.push("1100")
            } else if (unidad === "D") {
                octales.push("1101")
            } else if (unidad === "E") {
                octales.push("1110")
            } else if (unidad === 'F') {
                octales.push("1111")
            } else {
                console.log("entro aqui");
            }
        }
        let concat = octales.join("")
        document.getElementById("resultado").innerHTML = concat
    }
    // BINARIO--HEXADECIMAL

    if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "hexadecimal2") {
        let conted = 0
        let partes1 = 4
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero.split("");
        let residuo = parseInt(conted.length % 4)
        console.log("residuo=" + residuo);
        if (residuo == 3) {
            conted.unshift("0")
        }
        if (residuo == 2) {
            conted.unshift("0", "0")
        } if (residuo == 1) {
            conted.unshift("0", "0", "0")
        }
        console.log(conted);
        for (i = 0; i < conted.length; i += partes1) {
            let part = conted.slice(i, i + partes1)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                octales.unshift("0")
            } else if (part == "0001") {
                octales.unshift("1")
            } else if (part == "0010") {
                octales.unshift("2")
            } else if (part == "0011") {
                octales.unshift("3")
            } else if (part == "0100") {
                octales.unshift("4")
            } else if (part == "0101") {
                octales.unshift("5")
            } else if (part == "0110") {
                octales.unshift("6")
            } else if (part == "0111") {
                octales.unshift("7")
            } else if (part == "1000") {
                octales.unshift("8")
            } else if (part == "1001") {
                octales.unshift("9")
            } else if (part == "1010") {
                octales.unshift("A")
            } else if (part == "1011") {
                octales.unshift("B")
            }
            else if (part == "1100") {
                octales.unshift("C")
            } else if (part == "1101") {
                octales.unshift("D")
            } else if (part == "1110") {
                octales.unshift("E")
            }
            else if (part == "1111") {
                octales.unshift("F")
            } else {
                console.log("entro aqui");
            }
        }
        octales.reverse();
        let concat = octales.join("")
        document.getElementById("resultado").innerHTML = concat
    }
}

