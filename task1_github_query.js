//its piperdream nodejs task 
//creates github query 
//looks for issues created during last 3 minutes
let ts = Date.now();
let date_ob = new Date(ts);
date_ob.setMinutes(date_ob.getMinutes()-3);
var date = date_ob.toISOString().substr(0, 19)
this.todate=date
this.query="org:CARLDATA state:open created:"+this.todate+"..*"