// Servicio de TizenBrew (Node antiguo): abre la app Home ya instalada en la TV.
// TizenBrew inyecta `tizen` en el contexto del servicio; las páginas web de los módulos no lo tienen.
var HOME_ID = 'HkTvHome01.Home';

setTimeout(function () {
  try {
    tizen.application.launch(HOME_ID, function () {}, function (e) {
      console.log('home-launcher: no se pudo abrir Home: ' + e.message);
    });
  } catch (e) {
    console.log('home-launcher: no se pudo abrir Home: ' + e.message);
  }
}, 1500);
