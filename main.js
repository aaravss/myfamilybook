var images = ["https://images-na.ssl-images-amazon.com/images/I/81P6BiPxTxL.jpg","https://www.seekpng.com/png/small/297-2976805_-boy-thinking.png", "https://p.kindpng.com/picc/s/40-406032_4-teenage-girl-clipart-hd-png-download.png" , "https://us.123rf.com/450wm/volhah/volhah1903/volhah190300033/123541429-portrait-of-elegant-business-woman-with-arms-crossed-isolated-vector-illustration.jpg?ver=6", "https://us.123rf.com/450wm/mathibfa/mathibfa1812/mathibfa181200275/113409708-portrait-of-excited-business-man-dressed-in-black-formal-wear-showing-thumbs-up-sign-deal-like-agree.jpg?ver=6", "https://www.warrenphotographic.co.uk/photography/bigs/33108-Young-fluffy-rabbit-standing-up-white-background.jpg"];
var names = ["Family Book","Aarav Sanganneria", "Aarushi Sanganeria", "Mannu Sanganeria", "Ajay Sanganeria", "Dusky"];
var i = 0;
function next()
{
  i++;
  var number_of_family_members = 5;
  if(i> number_of_family_members)
  {
    i = 0
  }
  var updatedName = names[i] ;
  var updatedImage = images[i];
  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}

function prev()
{
  i--;
  var min_number_of_members = -1;
  if(i<=min_number_of_members)
  {
    i = 5
  }

    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
