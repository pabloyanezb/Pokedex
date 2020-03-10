$(document).ready(function(){
    for (var i = 1; i<=151;++i){
        $('.contenedor').append(
        `<div class="col-2">
            <img class="pokemon" data-pokemon="${i}" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        </div>`);
    };
    $(document).on('click', '.pokemon', function(){
        $('.pokedex').children().remove();
        $(this).attr('data-toggle','modal');
        $(this).attr('data-target','.modal');

        var pokemon_id = $(this).attr('data-pokemon');
        $.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`,
            function(pokemon){
                    var nombre = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
                    $('.pokedex').append(`<div class="modal-header">
                                            <h5 class="modal-title">`+nombre+`</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                         </div>`);
                    $('.pokedex').append('<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon_id+'.png"></img>')
                    var type_list = "";
                    type_list += "<h5>Tipos</h5>";
                    type_list += "<ul>";
                    for(var i = 0; i < pokemon.types.length; i++) {
                        type_list += "<li>" + pokemon.types[i].type.name + "</li>";
                    }
                    type_list += "</ul>";
                    $('.pokedex').append(type_list);
                    $('.pokedex').append("<h5>Altura</h5><p>"+pokemon.height+"</p>");
                    $('.pokedex').append("<h5>Peso</h5><p>"+pokemon.weight+"</p>");

                });
    })
});