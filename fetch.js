const fs = require('fs');
const csv = require('csv-parser');
const results= [];
const readCSVFile = async () => {
 fs.createReadStream('data.csv')
.pipe(csv())
.on('data',(data)=>results.push(data))
.on('end', () => {
      
      const found = results.find(({ LastName }) => LastName === "Alberto");
      
      console.log(found); 
    
  });
};
 readCSVFile()
