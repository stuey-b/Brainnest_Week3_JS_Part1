const PI = 3.14159265359;

const calculateSquareDiagonal = (sideLength) => {
  const squareRootOf2 = Math.sqrt(2);
  const diagonal = sideLength * squareRootOf2;
  console.log(diagonal);
};

const calculateTriangleArea = (a, b, c) => {
  const semiPerimeter = (a + b + c) / 2;
  const triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - a) * 
  (semiPerimeter - b) * (semiPerimeter - c));
  console.log(triangleArea);
};

const calculateCircumference = (radius) => {
  const diameter = radius * 2;
  const circumference = diameter * PI;
  console.log(circumference);
};

const calculateCircleArea = (radius) => {
  const surfaceArea = PI * radius ** 2;
  console.log(surfaceArea);
};

calculateSquareDiagonal(9);
calculateTriangleArea(5, 6, 7);
calculateCircumference(4);
calculateCircleArea(4);