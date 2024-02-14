// Triangle Area Calculation
function triangleCalculate(){
    const base = parseFloat(getInputValueByID("inputBase"));
    const height = parseFloat(getInputValueByID("inputHeight"));
    const area = (0.5*base*height)

    setInnerText("TriangleResult", area)
}


// Rectangle Area Calculation
function rectangleCalculate(){
    const width = parseFloat(getInputValueByID("inputWidth"));
    const length = parseFloat(getInputValueByID("inputLength"));
    const Rectangle_Area = (width*length)

    setInnerText("rectangleResult", Rectangle_Area)
}


// Parallelogram Area Calculation
function ParallelogramCalculate(){
    const widthPara = parseFloat(getInputValueByID("inputWidthPara"));
    const heightPara = parseFloat(getInputValueByID("inputHeightPara"));
    const Parallelogram_Area = (widthPara*heightPara)

    setInnerText("ParallelogramResult", Parallelogram_Area)
}



// Rhombus Area Calculation
function RhombusCalculate(){
    const InputD1 = parseFloat(getInputValueByID("inputD1"));
    const InputD2 = parseFloat(getInputValueByID("inputD2"));
    const Rhombus_Area = (0.5*InputD1*InputD2)

    setInnerText("RhombusResult", Rhombus_Area)
}



// Pentagon Area Calculation
function PentagonCalculate(){
    const InputP = parseFloat(getInputValueByID("inputP"));
    const InputB = parseFloat(getInputValueByID("inputB"));
    const Pentagon_Area = (0.5*InputP*InputB)

    setInnerText("PentagonResult", Pentagon_Area)
}



// Ellipse Area Calculation
function EllipseCalculate(){
    const InputA = parseFloat(getInputValueByID("inputa"));
    const Inputb = parseFloat(getInputValueByID("inputb"));
    const Ellipse_Area = (Math.PI*InputA*Inputb);

    setInnerText("EllipseResult", Ellipse_Area.toFixed(2))
}


// Common Code Reuseable
function getInputValueByID (inputFiledID){
    const inputFiled = document.getElementById(inputFiledID);
    const inputValue = parseFloat(inputFiled.value)
    return inputValue;
}


function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}