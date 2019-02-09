// Au clique sur Afficher, grâce a l'evenement .click, l'id #text est selectionné pour afficher le text
$(document).ready(function(){
  $('#show').click(function(){
  $('#text').show();
  });
});
// Au clique sur Masquer, grâce a l'evenement .click, l'id #text est selectionné pour masquer le text
$(document).ready(function(){
  $('#hide').click(function(){
  $('#text').hide();
  });
});
