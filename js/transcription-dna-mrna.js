document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#backmain").addEventListener("click",() => {
        window.location.href = "/DNA-biology-tool"
    });

    function convertToMRNA(input) {
        return input.replace(/T/g, "U");
    }

    function convertToDRNA(input) {
        return input.replace(/T/g, "U");
    }

    const mrnainput = document.querySelector("#M-RNA input.line");
    mrnainput.addEventListener("input",() => {
        if (/^[AUGC]*$/.test(dnainput.value)) {
            mrnainput.style.color = "white";
            dnainput.value = convertToDRNA(dnainput.value);
        } else {
            mrnainput.style.color = "red";
        }
    })

    const dnainput = document.querySelector("#DNA input.line");
    dnainput.addEventListener("input",() => {
        if (/^[ATGC]*$/.test(dnainput.value)) {
            dnainput.style.color = "white";
            mrnainput.value = convertToMRNA(dnainput.value);
        } else {
            dnainput.style.color = "red";
        }
    })
});
