console.log('garage.js sourced');
// garage arrays
var garage=[];
var addCar = function(){
  console.log('in addCar');
  // get user input
  // var year = document.getElementById('yearIn').value;
  // var make = document.getElementById('makeIn').value;
  // var model = document.getElementById('modelIn').value;
  // var picURL = document.getElementById('picURLIn').value;
  // var description = document.getElementById('descriptionIn').value;
  // create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
    picURL: document.getElementById('picURLIn').value,
    description: document.getElementById('descriptionIn').value

  };// end newCar
  console.log( newCar);
  // push car into garage
  garage.push( newCar );
  // display cars
  displayCars();
}; //end addCar

var displayCars = function(){
  console.log( 'in displayCars');
  console.log( garage );
  // empty out ul element
  document.getElementById('allCars').innerHTML='';
  // for each car in teh garage, add a list item with year, make, and modelIn
  for( var i = 0; i < garage.length; i++ ){
    // car information (year, make, mmodel)
    var carInfo = garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model;
    // put carInfo inside a list item through a textNode
    // create the li
    var listItem = document.createElement( 'li' );
    // create the textNode
    var textNode = document.createTextNode( carInfo );
    // append textNode as child to li
    listItem.appendChild( textNode );
    // append list item to the ul
    document.getElementById('allCars').appendChild( listItem );

  }// end for
}; // end displayCars
