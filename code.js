var adjusted=[
    ["1st quarter 2010(p)","860,474","38,707","4.0",'2.0','1.5','6.3','14.3'],
    ["4th quarter 2009(r)","941,355","37,141","4.1",'2.0','4.2','2.1','14.6'],
    ["4th quarter 2009(r)","941,355","38,141","4.1",'2.0','4.2','2.1','14.6'],
    ["4th quarter 2009(r)","941,355","36,141","4.1",'2.0','4.2','2.1','14.6'],
    ["4th quarter 2009(r)","941,355","38,141","4.1",'2.0','4.2','2.1','14.6']

   

];
var notAdjusted=[
    ["1st quarter 2010(p)","860,474","34,707","4.0",'2.0','-1.5','6.3','-14.3'],
    ["4th quarter 2009(r)","941,355","38,141","4.1",'2.0','4.2','2.1','14.6'],
    ["4th quarter 2009(r)","841,355","38,141","4.1",'2.0','-4.2','2.1','14.6'],
    ["4th quarter 2009(r)","971,355","33,141","4.1",'2.0','4.2','2.1','14.6'],
    ["4th quarter 2009(r)","831,355","32,141","4.1",'2.0','4.2','-2.1','14.6']

   

];


var text="<table>";
text+="<tr><th rowspan='2'>Quarter</th><th colspan='2'>Retail sales (million of dollars)</th><th rowspan='2'>Ecommerce as a <br>percent of total</th><th colspan='2'>Percent change <br>from prior quarter</th><th colspan='2'>Percent change from <br> same quarter a year ago</th></tr>";
text+="<tr><th>Total</th><th>Ecommerce</th><th>Total</th><th>Ecommerce</th><th>Total</th><th>Ecommerce</th></tr>";

text+="<br><tr><td><strong>Adjusted</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><br><br>" ;
adjusted.forEach((el) => {
     text+='<tr><td>'+el[0]+'</td><td>'+el[1]+'</td><td>'+el[2]+'</td><td>'+el[3]+'</td><td>'+el[4]+'</td><td>'+el[5]+'</td><td>'+el[6]+'</td><td>'+el[7]+'</td></tr>'


});
text+="<tr><td><strong>Not Adjusted</strong></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><br><br>" ;
notAdjusted.forEach((el) => {
     text+='<tr><td>'+el[0]+'</td><td>'+el[1]+'</td><td>'+el[2]+'</td><td>'+el[3]+'</td><td>'+el[4]+'</td><td>'+el[5]+'</td><td>'+el[6]+'</td><td>'+el[7]+'</td></tr>'


});



text+='</table>';

document.getElementById("res").innerHTML=text;