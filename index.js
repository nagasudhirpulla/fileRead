var AncFile;
var DCFile;
var SCHFile;
var RUPFile;
var RDNFile;
window.onload = function () {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        if (true) {
            var reader = new FileReader();

            reader.onload = function (e) {
                //fileDisplayArea.innerText = reader.result;
                //do something with the text here
                console.log("The parsed file is ");
                console.log(CSVToArray(reader.result));
            };

            reader.readAsText(file);
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
    //readTextFile("file:///C:/Users/Nagasudhir/Documents/WBESWareHousing/schedules/cgpl-isgs.js");
};

//not needed and does not work in computer
function readTextFile(file) {
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                fileDisplayArea.innerText = allText
            }
        }
    };
    rawFile.send(null);
}
