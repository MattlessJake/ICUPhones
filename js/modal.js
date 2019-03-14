// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var close = document.getElementById('close');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.getElementById('huaweiP20').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML = 'Huawei P20 Lite:' + '<br /><br />' + '<li>£400</li>' + '<br />' + '<li>Up to 30 hours battery life</li>' + '<br />' + '<li>5.8 Inch display</li>' + '<br/>' + '<li>64GB internal memory</li>' + '<br/>' + '<li>16MP + 2MP Dual Camera</li>';
}
document.getElementById('huaweiM20').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Huawei Mate 20 Pro:' + '<br /><br />' + '<li>£750</li>' + '<br />' + '<li>Up to 29 hours battery life</li>' + '<br />' + '<li>6.4 Inch display</li>' + '<br/>' + '<li>128GB internal memory</li>' + '<br/>' + '<li>40MP + 20MP + 8MP Leica Tri-lens</li>';
}
document.getElementById('huaweiP8L').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Huawei P8 Lite:' + '<br /><br />' + '<li>£190</li>' + '<br />'  + '<li>Fingerprint Scanner</li>' + '<br />' + '<li>5.2 Inch display</li>' + '<br/>' + '<li>16GB internal memory</li>' + '<br/>' + '<li>12MP Camera</li>';
}
document.getElementById('samsungGS7').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Samsung Galaxy S7:' + '<br /><br />' + '<li>£350</li>' + '<br />' + '<li>22 Hour battery life</li>' + '<br/>' +  '<li>5.1 Inch display</li>' + '<br/>' + '<li>32GB internal memory</li>' + '<br/>' + '<li>12MP Camera</li>';
}
document.getElementById('samsungGS9').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Samsung Galaxy S9:' + '<br /><br />' + '<li>£620</li>' + '<br />' + '<li>Facial Recognition</li>' + '<br/>' +  '<li>5.8 Inch display</li>' + '<br/>' + '<li>64GB internal memory</li>' + '<br/>' + '<li>12MP Camera</li>';
}
document.getElementById('samsungGS10').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Samsung Galaxy S10:' + '<br /><br />' + '<li>£800</li>' + '<br />' + '<li>Wireless Power Sharing</li>' + '<br/>' +  '<li>6.1 Inch display</li>' + '<br/>' + '<li>128GB internal memory</li>' + '<br/>' + '<li>12MP + 12MP + 16MP triple lens camera</li>';
}
document.getElementById('IphoneXR').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Iphone XR:' + '<br /><br />' + '<li>£750</li>' + '<br />' + '<li>25 Hour battery</li>' + '<br/>' +  '<li>6.1 Inch display</li>' + '<br/>' + '<li>64GB, 128GB or 256GB internal memory</li>' + '<br/>' + '<li>12MP Camera</li>';
}
document.getElementById('IphoneX').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Iphone X:' + '<br /><br />' + '<li>£800</li>' + '<br />' + '<li>Up to 21 Hours Battery</li>' + '<br/>' +  '<li>5.8 Inch display</li>' + '<br/>' + '<li>64GB or 128GB internal memory</li>' + '<br/>' + '<li>12MP + 12MP dual lens camera </li>';
}
document.getElementById('Iphone7').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Iphone 7:' + '<br /><br />' + '<li>£400</li>' + '<br />' + '<li>12MP camera with OIS </li>' + '<br/>' +  '<li>4.7 Inch display</li>' + '<br/>' + '<li>32GB, 128GB or 256GB internal memory</li>' + '<br/>' + '<li>7MP front-facing lens</li>';
}
document.getElementById('Xperia10').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Sony Xperia 10:' + '<br /><br />' + '<li>£320</li>' + '<br />' + '<li>Fingerprint scanner</li>' + '<br/>' +  '<li>5.7 Inch display</li>' + '<br/>' + '<li>64GB internal memory</li>' + '<br/>' + '<li>19 MP Motion Eye camera with 4K HDR Movie recording </li>';
}
document.getElementById('XperiaXa1').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Sony Xperia XA1:' + '<br /><br />' + '<li>£160</li>' + '<br/>' +  '<li>5 Inch HD display</li>' + '<br/>' + '<li>32GB Internal storage</li>' + '<br/>' + '<li>23MP camera</li>';
}
document.getElementById('XperiaXa2').onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
  captionText.innerHTML =  'Sony Xperia XA2:' + '<br /><br />' + '<li>£250</li>' + '<br />' + '<li>Fingerprint scanner</li>' + '<br/>' +  '<li>5.2 Inch display</li>' + '<br/>' + '<li>32GB Internal storage</li>' + '<br/>' + '<li>23MP camera</li>';
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() { 
  modal.style.display = "none";
}