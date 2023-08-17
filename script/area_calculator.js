function btnTriangle() {
    //base field value
    const baseValueString = document.getElementById('triangle-base').value;
    const baseValue = parseFloat(baseValueString);
    
    //height field value
    const heightValueString = document.getElementById('triangle-height').value;
    const heightValue = parseFloat(heightValueString);
    document.getElementById('triangle-base').value = '';
    document.getElementById('triangle-height').value = '';
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('provide valid numbers');
        return;
    }
    //calculate the area...
    const triangleArea = 0.5 * baseValue * heightValue;
    document.getElementById('triangle-area').innerText = triangleArea;
}
function btnRectangle(){
    //width field value
    const widthValueString = document.getElementById('rectangle-width').value;
    const widthValue = parseFloat(widthValueString);

    //lenght field value..
    const lenghtValueString = document.getElementById('rectangle-length').value;
    const lenghtValue = parseFloat(lenghtValueString);
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';
    if(isNaN(widthValue) || isNaN(lenghtValue)){
        alert('provide valid numbers');
        return;
    }
    //calculate the area..
    const rectangleArea = widthValue * lenghtValue;
    document.getElementById('rectangle-area').innerText = rectangleArea;
}