$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',
    dataType: 'json',
    success: function(data) {
      alert("WELCOME TO FILTON STREET MALL!"); // give the users an introduction alert. Welcome the user.
      
      alert("Here are the types of stores we have in Filton Street Mall: [Jewelry and Accessories], [Women's and Men's Apparel and Footwear], [Food], [Electronics], [Women's Apparel], [Women's Footwear], [Bank] ,[Home Goods], [Men's Apparel - Urban], [Women's Apparel - Urban], [Women's Footwear], [Children's Apparel], [Specialty - Embroidery], [Leather Goods], [Specialty - Uniform], [Women's Apparel -Urban], [Women's Footwear], [Pharmacy], [Women's and Men's Apparel -Urban], [Nails], [Women's Apparel - Urban], [Women's and Men's Footwear], [Men's Apparel], [Dental Care], [Variety Store], [Eye Care], [Woman Apparel], [Woman's and Men's Footwear], [Women's and Men's Apparel - Urban], [Children's Footwear], [Apparel and Footwear], [Fitness], [Department Store], [Dental, Medical], [Sporting Goods Women's and Men's Apparel Women's and Men's Footwear], [Baby and Children's Furniture, Apparel and Accessories], [Women's and Men's Footwear Children's Footwear], [Men's Apparel and Footwear - Urban], [Footwear], [Furniture]")
     // alert the user all the types of stores we have in the mall by giving them all the list of types. 
     
    var usersStore = prompt("What type of store would you like to visit? PLEASE PRINT THE EXACT TYPE INSIDE THE BRACKET OR COPY AND PASTE!!" + "<Br>" + " Here are some popular type of stores availble in the store: [Jewelry and Accessories], [Women's and Men's Apparel and Footwear], [Food], [Electronics], [Women's Apparel], [Women's Footwear], [Bank] ,[Home Goods], [Women's Footwear], [Children's Apparel], [Leather Goods], [Women's Footwear], [Pharmacy], [Women's and Men's Footwear], [Men's Apparel], [Woman Apparel], [Woman's and Men's Footwear], [Department Store], [Footwear]");
    // prompt the user; allows user to select one the type they input. 
    
    for(var i = 0; i < data.length; i++){ // loops happening
      if (data[i].type == usersStore) { // as loops are happening, this allows the data to sort out everything that match the user's input.
        document.write("<br>" + "The type: " + data[i].type + "<br>" + "<br>" + data[i].store + "<br>" + " website: " + data[i].website +"<br>");
         } // finally we printed out the user's input by listing all the store that fall into the "type" category along with the website if available . For example, if I put "Bank", I would have all the bank and their website listed. If there's no website, Undefined will appear
    } 
}
});