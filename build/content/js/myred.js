$(document).ready(function () {
    $("#redactor, .redactor").redactor(
        {
            imageUpload: "http://localhost:8083/api/v1/upload/folder/editorImage",
            imageGetJson: "http://localhost:8083/upload/getimages", autoformat: !1, convertDivs: !1
        });
    $("#redactorRTL, .redactorRTL").redactor(
        {
            imageUpload: "http://localhost:8083/api/v1/upload/folder/editorImage",
            imageGetJson: "http://localhost:8083/upload/getimages", autoformat: !1, convertDivs: !1,
            direction: 'rtl'
        });
});
