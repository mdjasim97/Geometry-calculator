
function triangleCalculate(){
    const btn = document.getElementById("triangleCal");
    btn.addEventListener("click", function(){
        const inputText = document.getElementById("inputBase");
        const base = parseFloat(inputText.value);


        const inputTextH = document.getElementById("inputHeight");
        const height = parseFloat(inputTextH.value);


        const area = 0.5 * base * height;


        document.getElementById("TriangleResult").innerText=area;
    })



}

function rectangleCalculate(){
    const btn = document.getElementById("RectangleCal");
    btn.addEventListener("click", function(){
        const inputWidth = document.getElementById("inputWidth");
        const width = parseFloat(inputWidth.value);


        const inputLength = document.getElementById("inputLangth");
        const length = parseFloat(inputLength.value);


        const area = width * length;


        document.getElementById("rectangleResult").innerText=area;
    })



}


function ParallelogramCalculate(){
    const btn = document.getElementById("ParallelogramCal");
    btn.addEventListener("click", function(){
        const inputWidthPara = document.getElementById("inputWidthPara");
        const widthPara = parseFloat(inputWidthPara.value);


        const inputHeightPara = document.getElementById("inputHeightPara");
        const heightPara = parseFloat(inputHeightPara.value);


        const area = widthPara * heightPara;


        document.getElementById("ParallelogramResult").innerText=area;
    })



}


function RhombusCalculate(){
    const btn = document.getElementById("RhombusCal");
    btn.addEventListener("click", function(){
        const inputD1 = document.getElementById("inputD1");
        const InputD1 = parseFloat(inputD1.value);


        const inputD2 = document.getElementById("inputD2");
        const InputD2 = parseFloat(inputD2.value);


        const area = 0.5 * InputD1 * InputD2;


        document.getElementById("RhombusResult").innerText=area;
    })



}


function PentagonCalculate(){
    const PentagonBtn = document.getElementById("PentagonCal");
    PentagonBtn.addEventListener("click", function(){
        const inputP = document.getElementById("inputP");
        const InputP = parseFloat(inputP.value);


        const inputB = document.getElementById("inputB");
        const InputB = parseFloat(inputB.value);


        const area = 0.5 * InputP * InputB;
        const ellipseArea = area.toFixed(2)


        document.getElementById("PentagonResult").innerText=ellipseArea;
    })



}


function EllipseCalculate(){
    const PentagonBtn = document.getElementById("EllipseCal");
    PentagonBtn.addEventListener("click", function(){
        const inputA = document.getElementById("inputa");
        const InputA = parseFloat(inputA.value);


        const inputb = document.getElementById("inputb");
        const Inputb = parseFloat(inputb.value);


        const area = Math.PI * InputA * Inputb;
        const ellipseArea = area.toFixed(2)


        document.getElementById("EllipseResult").innerText=ellipseArea;
    })



}