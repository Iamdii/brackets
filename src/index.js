module.exports = function check(str, bracketsConfig) {
  let n = str.length/2;
  
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      str = str.replaceAll(bracketsConfig[j][0] + bracketsConfig[j][1], "");
    }

    if(str == "") {
      return true;
    }
  }
  
  return false;
}

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}
