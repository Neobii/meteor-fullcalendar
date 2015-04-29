Template.fullcalendar.rendered = function() {
    var div = $(this.find(".ffCal"));//this.$(this.firstNode);
    //jquery takes care of undefined values, no need to check here
    div.attr('id',this.data.id);
    div.addClass(this.data.class);
    var self = this;
    //hacckx
    setTimeout(function(){
    	div.fullCalendar(self.data);
    }, 300);
};
