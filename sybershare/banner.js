

function random_imglink(){
  var myimages=new Array()
  //specify random images below. You can have as many as you wish
  myimages[1]="images/1.jpg"
  myimages[2]="images/2.jpg"
  myimages[3]="images/3.jpg"
  myimages[4]="images/4.jpg"
  myimages[5]="images/5.jpg"
  myimages[6]="images/6.jpg"
  myimages[7]="images/7.jpg"
  myimages[8]="images/8.jpg"
  myimages[9]="images/9.jpg"
  myimages[10]="images/10.jpg"
  myimages[11]="images/11.jpg"
  myimages[12]="images/12.jpg"
  myimages[13]="images/13.jpg"
  myimages[14]="images/14.jpg"
  myimages[15]="images/15.jpg"
  myimages[16]="images/16.jpg"
  myimages[17]="images/17.jpg"
  myimages[18]="images/18.jpg"
  myimages[19]="images/19.jpg"
  myimages[20]="images/20.jpg"
  myimages[21]="images/21.jpg"
  myimages[22]="images/22.jpg"
  myimages[23]="images/23.jpg"
  myimages[24]="images/24.jpg"
  myimages[25]="images/25.jpg"
  myimages[26]="images/26.jpg"
  myimages[27]="images/27.jpg"
  myimages[28]="images/28.jpg"
  myimages[29]="images/29.jpg"
  myimages[30]="images/30.jpg"
  myimages[31]="images/31.jpg"
  myimages[32]="images/32.jpg"
  myimages[33]="images/33.jpg"
  myimages[34]="images/34.jpg"
  myimages[35]="images/35.jpg"
  myimages[36]="images/36.jpg"
  myimages[37]="images/37.jpg"
  myimages[38]="images/38.jpg"
  myimages[39]="images/39.jpg"
  myimages[40]="images/40.jpg"
  myimages[41]="images/41.jpg"
  myimages[42]="images/42.jpg"
  myimages[43]="images/43.jpg"
 

  var ry=Math.floor(Math.random()*myimages.length)

  if (ry==0)
     ry=1
     document.write('<img src="'+myimages[ry]+'" border=0>')
}

  random_imglink()