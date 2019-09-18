<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="item-template" type="text/x-handlebars-template">
    </script>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>

    <title>CRUD PAGAMENTI</title>
  </head>
  <body>

    <div class="main_container">

      <div class="title">
        <h1>PAGAMENTI</h1>
      </div>

      <div class="payment_container">
        <div class="rejected">
          <h2>Pagamenti rifiutati</h2>
          <div class="rejected_cont">
            <!-- inserimento template handlebars -->
          </div>
        </div>

        <div class="pending">
          <h2>Pagamenti in sospeso</h2>
          <div class="pending_cont">
            <!-- inserimento template handlebars -->
          </div>
        </div>

        <div class="accepted">
          <h2>Pagamenti accettati</h2>
          <div class="accepted_cont">
            <!-- inserimento template handlebars -->
          </div>
        </div>
      </div>

    </div>
  </body>

  <!-- SCRIPT HANDLEBARS -->
  <script id="template_payments" type="text/x-handlebars-template">
    <div class="payment_list" data-id={{id}}>
      <p><span>Stato: </span>{{status}}</p>
      <p><span>Prezzo: </span>{{price}}</p>
      <p><span>ID Prenotazione: </span>{{prenotazione_id}}</p>
      <p><span>ID Pagante: </span>{{pagante_id}}</p>
      <button class="delete_button" type="button" name="button">CANCELLA</button>
    </div>
  </script>

</html>
