function Image(imgObj) {
    for (let key in imgObj) { // ES6 feature
         this[key]= imgObj[key];
    }
 }
 // 1st version
 /*Neighborhood.prototype.toHtml = function() {
     let container = $('<div></div>');
     container.append(`<h2>${this.name}</h2><p>${this.city}</p>`)
     return container;
 }*/
 
 // 2nd version
 
 Image.prototype.toHtml = function() {
     let  imgSection = $('.template').clone();
     imgSection.removeClass('template');
     imgSection.find('h2').text(this.title);
     imgSection.find('img').attr('src', this.image_url);
     imgSection.find('p').text(this.description);
     imgSection.removeAttr('id');
     imgSection.attr('class', this.keyword);
     return  imgSection;
 }
 
 
 //3rd version: Mustache
 Image.prototype.toHtml = function() {
    
     let template = $('#mustache-template').html();
     
     let html = Mustache.render(template, this);
     
     return html;
 }
 
 // create an array of objects using constructor.
 Image.forEach(obj=> {
     let imgeObj = new Image(obj);
     $('#ssss').append(imgObj.toHtml());
 });