var checkboxes = $("form input[type='checkbox']");
var form_ids = [
    ["mmc-wl-form", "Mini_Cove_White_Light.zip"],
    ["mmc-sc-form", "Mini_Cove_Static_Color.zip"],
    ["mmc-gd-form", "Mini_Cove_Glowdim.zip"],
    ["mmc-cc-form", "Mini_Cove_Color_Changing.zip"],
    ["mmc-dw-form", "Mini_Cove_Dynamic_Whites.zip"],

    ["cove-wl-form", "Cove_White_Light.zip"],
    ["cove-sc-form", "Cove_Static_Color.zip"],
    ["cove-cc-form", "Cove_Color_Changing.zip"],
    ["cove-dw-form", "Cove_Dynamic_White.zip"],

    ["mmg-wl-form", "Mini_Graze_White_Light.zip"],
    ["mmg-sc-form", "Mini_Graze_Static_Color.zip"],
    ["mmg-gd-form", "Mini_Graze_Glowdim.zip"],
    ["mmg-dw-form", "Mini_Graze_Dynamic_Whites.zip"]
];
var stopSubmit = false;
var Promise = window.Promise;
if (!Promise) {
    Promise = JSZip.external.Promise;
}

/**
 * Fetch the content and return the associated promise.
 * @param {String} url the url of the content to fetch.
 * @return {Promise} the promise containing the data.
 */

function resetMessage () {
    $("#result")
    .removeClass()
    .text("");
}

function urlToPromise(url) {
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function displayToast() {
    $(".tooltiptext").addClass("show");
    setTimeout(function(){
        $(".tooltiptext").removeClass("show");
    }, 2000);
}

function submitForm(event) {

    //resetMessage();
    resetButton();

    var zip = new JSZip();

    // find every checked item
    var formId = $(this).closest("form").attr("id");
    
    $(this).find(":checked").each(function () {
        var $this = $(this);
        var url = $this.data("url");
        var filename = url.replace(/.*\//g, "");
        zip.file(filename, urlToPromise(url), {binary:true});
    });

    showMessage();

    // when everything has been downloaded, we can trigger the dl
    zip.generateAsync({type:"blob"}, function updateCallback(metadata) {
        var msg = "progression : " + metadata.percent.toFixed(2) + " %";
        if(metadata.currentFile) {
            msg += ", current file = " + metadata.currentFile;
        }
        //showMessage(msg);
        updatePercent(metadata.percent|0);
    })
    .then(function callback(blob) {

        // see FileSaver.js
        saveAs(blob, event.data.file_name);
        
        resetButton(formId);
        displayToast();
        //showMessage("done !");
    }, function (e) {
        showError(e);
    });

    return false;
}

$(document).ready(function (){
    

/*Enable submit button when at least one checkbox is checked*/
checkboxes.click(function() {
   var formId = $(this).closest("form").attr("id");
        console.log(formId);
        
    $("#" + formId + " .btn").attr("disabled", !checkboxes.is("#" + formId + " :checked"));
});
for (var i = 0; i < form_ids.length; i++) {
$("#" + form_ids[i][0]).on("submit", {file_name: form_ids[i][1]}, submitForm);
}
//  $("#mmc-wl-form").on("submit", {file_name: "Mini_Cove_White_Light_Resources.zip"}, submitForm);

//  $("#mmc-sc-form").on("submit", {file_name: "Mini_Cove_Color_Resources.zip"}, submitForm);

//  $("#mmc-gd-form").on("submit", {file_name: "Mini_Cove_Glowdim_Resources.zip"}, submitForm);

// $("form").on("submit", function() {
//     var form = $(this);
//     var id = form.attr('id');
//     console.log(form_ids[id]);
//     $("#" + id).on("submit", {file_name: form_ids[id]}, submitForm); 
// });


});
//var $form = $("#download_form").on("submit", {file_name: 'Mini_Cove_White_Light_Resources.zip'}, submitForm); 


// $("#submit1").click(function(ev){
//     $("#download_form1").submit();
// });

//  $("#download_form1").on("submit", { file_name: 'IES.zip'}, submitForm);
