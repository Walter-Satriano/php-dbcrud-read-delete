$(document).ready(function() {

  getPagamenti();

  //funzione per ottenere i dati dei pagamenti
  function getPagamenti() {

    $.ajax({

      url: "api-pagamenti.php",
      method: "GET",

      success: function(data) {

        printPagamenti(data);
        console.log(data);
      },
      error: function () {
        alert("Errore in getRooms");
      }
    });
  }

  //funzione per stampare a schermo i risultati
  function printPagamenti(data) {

    var source   = $("#template_payments").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < data.length; i++) {
      var d = data[i];

      var pagamento_id = d.id;
      var stato = d.status;
      var prezzo = d.price;
      var prenotazione = d.prenotazione_id;
      var pagante = d.pagante_id;

      var context = {
        id: pagamento_id,
        status: stato,
        price: prezzo,
        prenotazione_id: prenotazione,
        pagante_id: pagante
      };

      var html = template(context);

      // condizione che permette di stampare in 3 posizioni differenti
      if (stato == "rejected") {
        $(".rejected").append(html);
      }
      else if (stato == "pending") {
        $(".pending").append(html);
      }
      else if (stato == "accepted") {
        $(".accepted").append(html);
      }

    }
  }




});
