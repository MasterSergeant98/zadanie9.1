function getTriangleArea(a, h) {
if (a <= 0 || h <= 0) alert('Nieprawidlowe dane');
else alert('Warunek spelniony');
return (a*h/2);
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle1Area = getTriangleArea(-1, 4);
var triangle1Area = getTriangleArea(0, 5);