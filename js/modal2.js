// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var close = document.getElementById('close');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.getElementById('nokia7').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Nokia 7.1:' + '<br /><br />' + '<li>£190</li>' + '<br />' + '<li>Android One, the best of Android Software</li>' + '<br/>' +  '<li>5.8 Inch display</li>' + '<br/>' + '<li>32GB internal memory</li>' + '<br/>' + '<li>13 + 12MP Duel Cameras</li>';
}
document.getElementById('nokia8').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Nokia 8.1:' + '<br /><br />' + '<li>£370</li>' + '<br />' + '<li>5.8 Inch display</li>' + '<br/>' + '<li>64GB internal memory</li>' + '<br/>' + '<li>20MP Camera</li>';
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() { 
  modal.style.display = "none";
}