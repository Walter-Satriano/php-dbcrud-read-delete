$(document).ready(function() {

  getPagamenti();
  $(document).on("click", ".payment_list .delete_button", deletePagamenti)

  //funzione per pulire il ogni contenitore ad ogni chiamata getPagamenti
  function reset() {
    $(".rejected_cont").html("");
    $(".pending_cont").html("");
    $(".accepted_cont").html("");
  }

  //funzione per ottenere i dati dei pagamenti
  function getPagamenti() {

    reset();

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
        $(".rejected_cont").append(html);
      }
      else if (stato == "pending") {
        $(".pending_cont").append(html);
      }
      else if (stato == "accepted") {
        $(".accepted_cont").append(html);
      }

    }
  }

  //funzione per eliminare i pagamenti
  function deletePagamenti() {

    var deleteButton = $(this);
    var box = deleteButton.parent();
    var id_pagamento = box.data("id");

    $.ajax({

      url:"api-pagamenti-delete.php",
      method: "GET",
      data: {id: id_pagamento},

      success: function(data) {

        getPagamenti();
        console.log("dentro delete", data);
      },
      error: function() {
        alert("Errore in deleteRoom");
      }
    });
  }




});
