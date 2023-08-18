//global function...
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}
function validationFunction(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        alert('provide valid numbers');
        return false;
    }
    return true;
}
function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function setInEntyContainer(areaType, area) {
    const entryContainer = document.getElementById('entry-container');
    const p = document.createElement('p');
    p.classList.add('mt-2');
    const count = entryContainer.childElementCount;
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ml-2">Convert</button>`;

    entryContainer.appendChild(p);
}
function btnTriangle() {
    //base field value
    const baseValue = getInputValue('triangle-base');

    //height field value
    const heightValue = getInputValue('triangle-height');
    const validation = validationFunction(baseValue, heightValue);
    if (validation == true) {
        //calculate the area...
        const triangleArea = 0.5 * baseValue * heightValue;
        setInnerText('triangle-area', triangleArea);
        setInEntyContainer('Triangle', triangleArea);
    }
    // if(isNaN(baseValue) || isNaN(heightValue)){
    //     alert('provide valid numbers');
    //     return;
    // }

}
function btnRectangle() {
    //width field value
    const widthValue = getInputValue('rectangle-width');

    //lenght field value..
    const lenghtValue = getInputValue('rectangle-length');
    const validation = validationFunction(widthValue, lenghtValue);
    if (validation == true) {
        //calculate the area..
        const rectangleArea = widthValue * lenghtValue;
        setInnerText('rectangle-area', rectangleArea);
        setInEntyContainer('Rectangle', rectangleArea);
    }

}

function btnParallelogram() {
    //base value...
    const baseValue = getInputValue('parallelogram-base');


    //height value...
    const heightValue = getInputValue('parallelogram-height');
    const validation = validationFunction(baseValue, heightValue);
    if (validation == true) {
        // calculate area..
        const parallelogramArea = baseValue * heightValue;
        setInnerText('parallelogram-area', parallelogramArea);
        setInEntyContainer('Parallelogram', parallelogramArea);
    }


}
function btnRhombus() {
    //diagonal 1 value...
    const diagonal1Value = getInputValue('rhombus-diagonal1');

    //diagonal 2 value...
    const diagonal2Value = getInputValue('rhombus-diagonal2');
    const validation = validationFunction(diagonal1Value, diagonal2Value);
    if (validation == true) {
        //calculate area...
        const RhombusArea = 0.5 * diagonal1Value * diagonal2Value;
        setInnerText('rhobmus-area', RhombusArea);
        setInEntyContainer('Rhombus', RhombusArea);
    }


}
function btnPentagon() {
    //perimeter value....
    const perimeter = getInputValue('perimeter');
    //apothem value...
    const apothem = getInputValue('apothem');
    const validation = validationFunction(perimeter, apothem);
    if (validation == true) {
        //calculate area...
        const pentagonArea = 0.5 * perimeter * apothem;
        setInnerText('pentagon-area', pentagonArea);
        setInEntyContainer('Pentagon', pentagonArea);
    }


}
function btnEllipse() {
    //major value..
    const major = getInputValue('major');
    //minor value..
    const minor = getInputValue('minor');
    const validation = validationFunction(major, minor);
    if (validation == true) {
        //calculate area..
        const ellipse = 3.1416 * major * minor;
        ellipseArea = ellipse.toFixed(2);
        setInnerText('ellipse-area', ellipseArea);
        setInEntyContainer('Ellipse', ellipseArea);
    }

}