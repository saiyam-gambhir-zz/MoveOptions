var MultipleSelect = function(addButton, removeButton, leftBox, rightBox) {
  this.addButton = addButton;
  this.removeButton = removeButton;
  this.leftBox = leftBox;
  this.rightBox = rightBox;
}

MultipleSelect.prototype.showMessage = function(selectBox) {
  if(selectBox.options.length == 0) {
    alert('Sorry No Options To move');
    return false;
  }
}

MultipleSelect.prototype.moveItems = function(source, destination) {
  for( var index =0; index < source.options.length; index++ ) {
    if( source.options[index].selected ) {
      destination.appendChild( source.options[index] );
      index--;
    }
  }
}

MultipleSelect.prototype.addItems = function() {
  var _this = this;
  this.addButton.onclick = function() {
    _this.showMessage(_this.leftBox);
    _this.moveItems(_this.leftBox, _this.rightBox);
  }
}

MultipleSelect.prototype.removeItems = function() {
  var _this = this;
  this.removeButton.onclick = function() {
    _this.showMessage(_this.rightBox);
    _this.moveItems(_this.rightBox, _this.leftBox);
  }
}

MultipleSelect.prototype.bind = function() {
  this.addItems();
  this.removeItems();
}

window.onload = function() {
  var multipleSelect = new MultipleSelect(document.getElementById('add'), document.getElementById('remove'), document.getElementById('left'), document.getElementById('right'));
  multipleSelect.bind();
}