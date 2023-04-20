function areaofSquare() {
    firstSide = document.getElementById('first-side').value;
    secondSide = document.getElementById('second-side').value;

    areaofSquare = firstSide * secondSide;
    document.getElementById('result1').value = areaofSquare;
}

function areaofCircle() {
    radius = document.getElementById('radius').value;

    areaofCircle = 3.14 * (radius * radius);

    document.getElementById('result2').value = areaofCircle;
}

function areaofTriangle() {
    breadth = document.getElementById('breadth').value;
    height = document.getElementById('height').value;

    areaofTriangle = (1 / 2) * breadth * height;

    document.getElementById('result3').value = areaofTriangle;
}