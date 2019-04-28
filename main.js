var $ = require('jquery');
require('./css/style.css');

export function credEncaDeca(rootElement, name){
    rootElement.append(
        $("<div>").append(
            $("<h3>").text(name).addClass("componentsTitle")
        ).addClass("EncaDeca")
    )   
}