var $ = require('jquery');
require('./css/style.css');

export function credReporting(rootElement, name){
    rootElement.append(
        $("<div>").append(
            $("<h3>").text(name).addClass("compTitle")
        ).addClass("reportingComponent")
    )   
}
