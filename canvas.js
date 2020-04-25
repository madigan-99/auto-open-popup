javascript: var dd = window.open(' ');
dd.document.write('<html>\n<body>');
$('.question_input').each(function(index, item) {
	dd.document.write($(item).val());
    dd.document.write("</br>");
});
dd.document.write('<html>\n<body>');
dd.document.close();
dd.focus();