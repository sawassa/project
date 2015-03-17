quotes = new Array(6); 
authors = new Array(6); 
quotes[0] = "Кто первым встал - того и тапки"; 
authors[0] = "Народное творчество"; 
quotes[1] = "Девиз экстримальщика: жить нужно прожить так, чтобы перед смертью было мучительно больно"; 
authors[1] = "Extreme"; 
quotes[2] = "Не спрашивай, что страна может сделать для тебя, спроси: что ты можешь сделать для своей страны?"; 
authors[2] = "Д.Ф. Кеннеди"; 
quotes[3] = "Бросить курить - это так просто! Я - сто раз бросал"; 
authors[3] = "Марк Твен"; 
quotes[4] = "Боливар не вынесет двоих"; 
authors[4] = "О. Генри"; 
quotes[5] = "Попытка - не пытка"; 
authors[5] = "Л.П. Берия"; 

//calculate a random index 
index = Math.floor(Math.random() * quotes.length); 

//display the quotation 
document.write("<DL>\n"); 
document.write("<DT><I>" + "\"" + quotes[index] + "\"</I>\n"); 
document.write("<DD>" + "-- " + authors[index] + "\n"); 
document.write("</DL>\n"); 
