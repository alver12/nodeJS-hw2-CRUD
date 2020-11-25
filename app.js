const fs = require('fs');
const path = require('path');

const fold2000 = './2000'; 
const fold1800 = './1800';

fs.readdir (fold2000, function (err, allFold2000)  {
       if (err) throw err;

       fs.readdir (fold1800, function (err, allFold1800)  {
              if (err) throw err;
              moveFiles(allFold2000, fold2000, fold1800);
              moveFiles(allFold1800, fold1800, fold2000);
       });
});


function moveFiles(fileLists, srcFolder, dstFolder){
       fileLists.forEach(fileName => {
              fs.copyFile(path.join(srcFolder, fileName), path.join(dstFolder, fileName), (err) => {
                     if (err) throw err;
              });
              fs.unlink(path.join(srcFolder, fileName), (err) => {
                     if (err) throw err;
              });
       } )
}





