
   var names=[
   "2. My Father (Dr. Shashi Kumar Ramphal)",
   "3. My Mother (Dr. Olive Singh)",
   "4. Me (Shivansh Kumar))",
   "5. Us (The Shiv family)"
   ];
 var images=[
   "Papa.jpeg",
   "Mumma.jpeg",
   "Me.jpeg",
   "Us.jpeg"
 ];
 var i=0;
 function family(){
   document.getElementById("one").innerHTML=names[i];
   document.getElementById("family_img").src=images[i];
   i++;
   if(i==4){
     i=0;
   }}
