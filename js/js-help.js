/**
 * Reset the message.
 */
function resetMessage () {
    $("form :submit")
    .prop("disabled", false)
    .empty()
    .text("Pack Files");
}
/**
 * show a successful message.
 * @param {String} text the text to show.
 */
function showMessage() {
    //resetMessage();
    $("form :submit")
    .prop("disabled", true)
    .empty()
    .append(`<span style="vertical-align: middle;" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span><span>  Downloading</span>`);
    //.addClass("alert alert-success")
    //.text(text);
}

function resetButton(id) {
    $("form :submit")
    .empty()
    .text("Pack Files");
    $("#" + id + " .btn").attr("disabled", !checkboxes.is("#" + id + " :checked"));
}

/**
 * show an error message.
 * @param {String} text the text to show.
 */
function showError(text) {
    resetMessage();
    $("#result")
    .addClass("alert alert-danger")
    .text(text);
}
/**
 * Update the progress bar.
 * @param {Integer} percent the current percent
 */
function updatePercent(percent) {
    $("#progress_bar").removeClass("hide")
    .find(".progress-bar")
    .attr("aria-valuenow", percent)
    .css({
        width : percent + "%"
    });
}

if(!JSZip.support.blob) {
    showError("This demo works only with a recent browser !");
}