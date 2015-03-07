var updateProfile = (function(context) {
    var profile = [];     // Storage for all pairs found thus far
    
    // Get values from HTML Form
    var getValues = (function(context) {
        var pair = [];
        
        var temp = $(context).parent().find("#temp-control-time").val()
        pair.push(parseInt(temp));
        
        temp = $(context).parent().find("#temp-control-temp").val()
        pair.push(parseInt(temp));
        
        // TODO: Deal with error checking?
        return pair;
    });        
    
    // Get new values from HTML return new array
    return function(context) {
        profile.push(getValues(context));
        return profile;
    };
})();

$(function() {
    var plot = $.plot("#placeholder",  []);
    
    $("#temp-control-add").click(function() {
        
        // Update The Plot
        plot.setData([updateProfile(this)]);
        plot.setupGrid();
        plot.draw();
        
        // Re-print Values
        $(".temp-control-values").empty();
        $.each(plot.getData()[0]['data'], function(key, value) {
            $(".temp-control-values").append("<div class=\"temp-control-pair\"><div class=\"temp-control-value\">" + value[0] + "</div><div class=\"temp-control-value\">" + value[1] + "</div></div>");
           console.log(value); 
        });
    });
});