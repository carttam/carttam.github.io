var codeBox = document.getElementById("code");
document.getElementById("cpyCodeBox").onclick = function () {
    codeBox.classList.remove('d-none');
    codeBox.select();
    codeBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    codeBox.classList.add('d-none');
    //alert(codeBox.value);
}