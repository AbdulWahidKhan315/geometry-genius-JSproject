//global function...
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}
function validationFunction(value1,value2){
    if(isNaN(value1) || isNaN(value2)){
        alert('provide valid numbers');
        return;
    }
}
function setInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function btnTriangle() {
    //base field value
    const baseValue = getInputValue('triangle-base');
    
    //height field value
    const heightValue = getInputValue('triangle-height');
    validationFunction(baseValue,heightValue);
    // if(isNaN(baseValue) || isNaN(heightValue)){
    //     alert('provide valid numbers');
    //     return;
    // }
    //calculate the area...
    const triangleArea = 0.5 * baseValue * heightValue;
    setInnerText('triangle-area',triangleArea);
}
function btnRectangle(){
    //width field value
    const widthValue = getInputValue('rectangle-width');

    //lenght field value..
    const lenghtValue = getInputValue('rectangle-length');
    validationFunction(widthValue,lenghtValue);
    //calculate the area..
    const rectangleArea = widthValue * lenghtValue;
    setInnerText('rectangle-area',rectangleArea);
}

function btnParallelogram(){
    //base value...
    const baseValue = getInputValue('parallelogram-base');
    
    
    //height value...
    const heightValue = getInputValue('parallelogram-height');
    validationFunction(baseValue,heightValue);

    // calculate area..
    const parallelogramArea = baseValue*heightValue;
    setInnerText('parallelogram-area',parallelogramArea);
}