(function() {

$DOC.sections['fixed-top-bar'] = 
'[navbar]\
[Главная]({{=$DOC.root}}index.html)\n\
***\
[/navbar]';

/*
$DOC.sections['header-panel'] =
'# Markdown webdocs\n\
Система подготовки веб-справки и документации  \n\
Редактор документов с Markdown разметкой';
*/

if ($OPT.editable) {
    $DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* [repo on GitHub](https://github.com/facdev/docs)\n\
***\n\
* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) Artistic license 2.0\n\
* [Редактировать эту страницу](?edit)\
[/footer-layout]';

} else {

    $DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) Artistic license 2.0\
[/footer-layout]';
   
}

})();