console.log('garage.js sourced');
// garage arrays
var garage=[];
var outForDrive=[];
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
if( newCar.year == '' ||  newCar.make == '' || newCar.model == '' ){
  alert( 'Please fill out required fields');
}else{
    clearInputs();
    // push car into garage
    garage.push( newCar );
    // display cars
    displayCars();
 }
}; //end addCar

var clearInputs = function(){
  console.log('in clearInputs');
  document.getElementById('yearIn').value='';
  document.getElementById('makeIn').value='';
  document.getElementById('modelIn').value='';
  document.getElementById('picURLIn').value='';
  document.getElementById('descriptionIn').value='';
};

var displayCars = function(){
  console.log( 'in displayCars');
  console.log( garage );
  // empty out div element
  document.getElementById('allCars').innerHTML='';
  // for each car in the garage, add a list item with year, make, and modelIn
  for( var i = 0; i < garage.length; i++ ){
    // car information (year, make, mmodel)
    var carInfo = '<h2>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + '</h2><img src="' + garage[ i ].picURL + '">' +
    '<p>' + garage[ i ].description + ' <button onClick="takeOut(' + i + ')">Take me out for a drive</button></p>';
    // append car info to output div

    document.getElementById('allCars').innerHTML += carInfo;

  }// end for
}; // end displayCars

var takeOut = function( index ){
  console.log('taking out the', garage[ index ].year + ' ' + garage[ index ].model );
  // splice the car at this index from our array
  // ARRAY.splicec( INDEX, NUMBERTOREMOVE )
  var driving = {
    year: garage[ index ].year,
    make: garage[ index ].make,
    model: garage[ index ].model,
    picURL: garage[ index ].picURL,
    description: garage[ index ].description

  };
  outForDrive.push(driving);
  garage.splice( index, 1 );
  //show cars in garage
  displayCars();
  console.log(outForDrive);

};// end takeOut
