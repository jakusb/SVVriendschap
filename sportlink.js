function replacePlaceHolder(placeholder, text) {
  $('body :not(script)').contents().filter(function() {
      return this.nodeType === 3;
    }).replaceWith(function() {
        return this.nodeValue.replace(placeholder,text);
  });
  $("a.placeholder").each(function(i,item) {
        item.href = item.href.replace(placeholder,text);
  });
}
