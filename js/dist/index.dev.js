"use strict";

var image = document.getElementById('les_images');
var nombre_contacts = document.getElementById('nombre_contacts');
setTimeout(function () {
  image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell1.png)';
  image.style.opacity = "1";
}, 300);
setTimeout(function () {
  image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png)';
}, 1000);
setTimeout(function () {
  image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell4.png)';
}, 1800);
var bool = true;

function nav() {
  var largeurEcran = window.innerWidth;
  var Nav = document.getElementById('Nav');
  var main1 = document.getElementById('main_1');
  var main2 = document.getElementById('main_2');
  var CreerC__main = document.getElementById('CreerC__main');
  var Cont__main = document.getElementById('Cont__main');
  var libelle__main = document.getElementById('libelle__main');
  var icon1 = document.getElementById('icon1');
  var icon2 = document.getElementById('icon2');
  var icon3 = document.getElementById('icon3');
  var CreerC = document.getElementById('CreerC');
  var Cont = document.getElementById('Cont');
  var libelle = document.getElementById('libelle');

  if (largeurEcran > 1280) {
    if (bool == true) {
      main1.style.width = "0vw";
      main2.style.width = "100vw";
      main2.style.paddingRight = "40px";
      CreerC.style.width = "0vw";
      CreerC.style.fontSize = "0vw";
      Cont.style.width = "0vw";
      Cont.style.fontSize = "0vw";
      libelle.style.fontSize = "0px";
      icon1.style.fontSize = "0px";
      icon2.style.fontSize = "0px";
      icon3.style.fontSize = "0px";
      bool = false;
    } else {
      main1.style.width = "21vw";
      main2.style.width = "79vw";
      main2.style.paddingRight = "20px";
      CreerC.style.width = "13vw";
      CreerC.style.fontSize = "15px";
      Cont.style.width = "15vw";
      Cont.style.fontSize = "15px";
      libelle.style.fontSize = "17px";
      icon1.style.fontSize = "20px";
      icon2.style.fontSize = "20px";
      icon3.style.fontSize = "20px";
      bool = true;
    }
  } else {
    if (largeurEcran < 470) {
      Nav.style.left = "0px";
      Nav.style.width = "70vw";
      CreerC__main.style.width = "60vw";
      Cont__main.style.width = "60vw";
      libelle__main.style.width = "60vw";
    } else {
      Nav.style.left = "0px";
      Nav.style.width = "300px";
      CreerC__main.style.width = "200px";
      Cont__main.style.width = "250px";
      libelle__main.style.width = "250px";
    }
  }
}

function deNav() {
  var Nav = document.getElementById('Nav');
  Nav.style.left = "-70vw";
}
/*  LA LOGIQUE  */


var Table_prenoms = [];
var Table_noms = [];
var Table_entreprises = [];
var Table_fonctions = [];
var Table_emails = [];
var Table_phones = [];
var Table_urlImage = [];
var Table_indices = [];
var Table_libelles = [];
var Table_libelles_noms = [];
var Table_libelles_noms_solo = [];
var urlImage = "";
var nombre_de_contact = 0;
var nombreIndice = 0;
var btn_modifier = document.getElementById('btn_modifier');
var btn_envois = document.getElementById('btn_envois');
var ajouter_contacts = document.querySelector('.ajouter_contacts');
var bloc_contacts = document.getElementById('bloc_contacts');
var bloc_main = document.getElementById('bloc_main');
var nombre_contacts_1 = document.getElementById('nombre_contacts_1').textContent;
var iconPlus = document.getElementById('iconPlus');
var iconModifier = document.getElementById('iconModifier');
var contact_selectionner = document.getElementById('contact_selectionner');
var nombre_selectionner = document.getElementById('nombre_selectionner');
var suppressionMultiple = document.getElementById('suppressionMultiple');
var tout_les_libelles = document.getElementById('tout_les_libelles');
var selection_libelle = document.getElementById('selection_libelle');
var indiceLigneLOLO = 0;
btn_modifier.addEventListener('click', function (event) {
  var nom = document.getElementById('nom');
  var prenom = document.getElementById('prenom');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');

  if (prenom.value === "" && nom.value !== "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      prenom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else if (prenom.value !== "" && nom.value === "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      nom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else if (prenom.value === "" && nom.value === "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      nom.style.borderColor = "red";
      prenom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    var veriierPoint = 0;
    var verifierArobase = 0;
    var chaineEmail = String(email.value);

    if (chaineEmail.length === 0) {
      borderRedEmailAvecMessage();
    } else {
      if (chaineEmail[0] === "@" || chaineEmail[0] === ".") {
        messageEmailMalFormatter();
        borderRedEmailSansMessage();
      } else {
        for (var i = 0; i < chaineEmail.length; i++) {
          if (chaineEmail[i] === "@" && chaineEmail[i + 1] !== ".") {
            verifierArobase += 1;
          } else if (chaineEmail[i] === "." && chaineEmail[i + 1] !== "") {
            veriierPoint += 1;
          }
        }

        if (veriierPoint == 0 || verifierArobase == 0) {
          messageEmailMalFormatter();
          borderRedEmailSansMessage();
        } else {
          var chainePhone = String(phone.value);

          if (chainePhone.length < 10) {
            borderRedPhoneAvecMessage();
          } else {
            messageModificationReussi();
            ajouter_contacts.style.opacity = "0";
            prenom.style.borderColor = "#E5E7E9";
            nom.style.borderColor = "#E5E7E9";
            Table_noms[indiceLigneLOLO] = document.getElementById('nom').value;
            Table_prenoms[indiceLigneLOLO] = document.getElementById('prenom').value;
            Table_emails[indiceLigneLOLO] = document.getElementById('email').value;
            Table_entreprises[indiceLigneLOLO] = document.getElementById('entreprise').value;
            Table_fonctions[indiceLigneLOLO] = document.getElementById('fonction').value;
            Table_phones[indiceLigneLOLO] = document.getElementById('phone').value;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = selection_libelle.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var option = _step.value;

                if (option.selected) {
                  Table_libelles_noms_solo.push(option.value);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            Table_libelles_noms[indiceLigneLOLO] = Table_libelles_noms_solo;
            Table_urlImage[indiceLigneLOLO] = urlImage;
            refresh();
            bloc_main.hidden = true;
            urlImage = "";
            setTimeout(function () {
              ajouter_contacts.hidden = true;
              bloc_contacts.hidden = false;
              bloc_contacts.style.opacity = "1";
              vider();
              viderNombreContactSelectionner();
            }, 300);
            evenementLignesDuTableau();
          }
        }
      }
    }
  }
});
btn_envois.addEventListener('click', function (event) {
  var nom = document.getElementById('nom');
  var prenom = document.getElementById('prenom');
  var entreprise = document.getElementById('entreprise');
  var fonction = document.getElementById('fonction');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');

  if (prenom.value === "" && nom.value !== "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      prenom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else if (prenom.value !== "" && nom.value === "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      nom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else if (prenom.value === "" && nom.value === "") {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    setTimeout(function () {
      nom.style.borderColor = "red";
      prenom.style.borderColor = "red";
      messageChampsObligatoire();
    }, 200);
  } else {
    prenom.style.borderColor = "#E5E7E9";
    nom.style.borderColor = "#E5E7E9";
    var veriierPoint = 0;
    var verifierArobase = 0;
    var chaineEmail = String(email.value);

    if (chaineEmail.length === 0) {
      borderRedEmailAvecMessage();
    } else {
      if (chaineEmail[0] === "@" || chaineEmail[0] === ".") {
        messageEmailMalFormatter();
        borderRedEmailSansMessage();
      } else {
        for (var i = 0; i < chaineEmail.length; i++) {
          if (chaineEmail[i] === "@" && chaineEmail[i + 1] !== ".") {
            verifierArobase += 1;
          } else if (chaineEmail[i] === "." && chaineEmail[i + 1] !== "") {
            veriierPoint += 1;
          }
        }

        if (veriierPoint == 0 || verifierArobase == 0) {
          messageEmailMalFormatter();
          borderRedEmailSansMessage();
        } else {
          var chainePhone = String(phone.value);
          var verifierPhone = 0;

          if (chainePhone.length < 10) {
            borderRedPhoneAvecMessage();
          } else {
            for (var _i = 0; _i < Table_phones.length; _i++) {
              if (chainePhone === Table_phones[_i]) {
                verifierPhone += 1;
              }
            }

            if (verifierPhone === 1) {
              borderRedPhoneAvecMessageUnique();
            } else {
              messageAjoueReussi();
              ajouter_contacts.style.opacity = "0";
              prenom.style.borderColor = "#E5E7E9";
              nom.style.borderColor = "#E5E7E9";
              Table_noms.push(nom.value);
              Table_prenoms.push(prenom.value);
              Table_emails.push(email.value);
              Table_entreprises.push(entreprise.value);
              Table_fonctions.push(fonction.value);
              Table_phones.push(phone.value);
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = selection_libelle.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var option = _step2.value;

                  if (option.selected) {
                    Table_libelles_noms_solo.push(option.value);
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              Table_libelles_noms.push(Table_libelles_noms_solo);

              if (urlImage === "") {
                Table_urlImage.push('https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png');
              } else {
                Table_urlImage.push(urlImage);
              }

              refresh();
              bloc_main.hidden = true;
              nombre_de_contact += 1;
              document.getElementById('nombre_contacts_1').textContent = "(" + nombre_de_contact + ")";
              setTimeout(function () {
                ajouter_contacts.hidden = true;
                bloc_contacts.hidden = false;
                bloc_contacts.style.opacity = "1";
                vider();
                viderNombreContactSelectionner();
              }, 300);
              evenementLignesDuTableau();
              evenementLibelle();
            }
          }
        }
      }
    }
  }
});

function ouvrirAjoue() {
  document.getElementById('monImage').style.backgroundImage = "url('https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png')";

  if (nombre_de_contact === 0) {
    bloc_contacts.hidden = true;
    bloc_main.style.opacity = "0";
    setTimeout(function () {
      bloc_main.hidden = true;
      ajouter_contacts.hidden = false;
      ajouter_contacts.style.opacity = "1";
    }, 300);
  } else {
    bloc_main.hidden = true;
    bloc_contacts.style.opacity = "0";
    setTimeout(function () {
      bloc_contacts.hidden = true;
      ajouter_contacts.hidden = false;
      ajouter_contacts.style.opacity = "1";
    }, 300);
  }

  document.getElementById('btn_envois').hidden = false;
  document.getElementById('btn_modifier').hidden = true;
}

function fermerAjoue() {
  if (nombre_de_contact === 0) {
    bloc_contacts.hidden = true;
    ajouter_contacts.style.opacity = "0";
    setTimeout(function () {
      ajouter_contacts.hidden = true;
      bloc_main.hidden = false;
      bloc_main.style.opacity = "1";
    }, 300);
  } else {
    bloc_main.hidden = true;
    ajouter_contacts.style.opacity = "0";
    setTimeout(function () {
      ajouter_contacts.hidden = true;
      bloc_contacts.hidden = false;
      bloc_contacts.style.opacity = "1";
    }, 300);
  }
}

function messageChampsObligatoire() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "error",
    title: "Champs obligatoire"
  });
}

function messageEmailMalFormatter() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "error",
    title: "Email mal formatté"
  });
}

function messagePhoneMalFormatter() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "error",
    title: "Phone number mal formatté"
  });
}

function messagePhoneUnique() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "error",
    title: "Phone number déjà utilisé"
  });
}

function messageAjoueReussi() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Ajoue réussi avec succès"
  });
}

function messageAjoueLibelleReussi() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Ajoue Libellé réussi avec succès"
  });
}

function messageModificationLibelleReussi() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Modification Libellé réussi avec succès"
  });
}

function messageModificationReussi() {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Modification réussi avec succès"
  });
}

function borderRedEmailAvecMessage() {
  email.style.borderColor = "#E5E7E9";
  setTimeout(function () {
    email.style.borderColor = "red";
    messageChampsObligatoire();
  }, 200);
}

function borderRedPhoneAvecMessage() {
  phone.style.borderColor = "#E5E7E9";
  setTimeout(function () {
    phone.style.borderColor = "red";
    messagePhoneMalFormatter();
  }, 200);
}

function borderRedPhoneAvecMessageUnique() {
  phone.style.borderColor = "#E5E7E9";
  setTimeout(function () {
    phone.style.borderColor = "red";
    messagePhoneUnique();
  }, 200);
}

function borderRedEmailSansMessage() {
  email.style.borderColor = "#E5E7E9";
  setTimeout(function () {
    email.style.borderColor = "red";
  }, 200);
}

function modifierContact(indiceDuContact) {
  ouvrirAjoue();
  urlImage = Table_urlImage[indiceDuContact];
  document.getElementById('monImage').style.backgroundImage = "url('" + Table_urlImage[indiceDuContact] + "')";
  document.getElementById('nom').value = Table_noms[indiceDuContact];
  document.getElementById('prenom').value = Table_prenoms[indiceDuContact];
  document.getElementById('entreprise').value = Table_entreprises[indiceDuContact];
  document.getElementById('fonction').value = Table_fonctions[indiceDuContact];
  document.getElementById('email').value = Table_emails[indiceDuContact];
  document.getElementById('phone').value = Table_phones[indiceDuContact];
  document.getElementById('btn_envois').hidden = true;
  document.getElementById('btn_modifier').hidden = false;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = selection_libelle.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var option = _step3.value;

      if (Table_libelles_noms[indiceDuContact].includes(option.value)) {
        option.selected = true;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  Table_libelles_noms_solo = [];
}

function supprimerContact(indiceDuContact) {
  Swal.fire({
    title: "Etes vous sûr?",
    text: "voulez vous vraiment supprimé ce contact",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, suprime le!"
  }).then(function (result) {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Suppression reussie!",
        text: "Impeccable.",
        icon: "success"
      });
      Table_noms.splice(indiceDuContact, 1);
      Table_prenoms.splice(indiceDuContact, 1);
      Table_emails.splice(indiceDuContact, 1);
      Table_entreprises.splice(indiceDuContact, 1);
      Table_fonctions.splice(indiceDuContact, 1);
      Table_phones.splice(indiceDuContact, 1);
      Table_libelles_noms.splice(indiceDuContact, 1);
      Table_urlImage.splice(indiceDuContact, 1);
      viderNombreContactSelectionner();
      refresh();
      nombre_de_contact -= 1;
      document.getElementById('nombre_contacts_1').textContent = "(" + nombre_de_contact + ")";

      if (nombre_de_contact == 0) {
        bloc_contacts.hidden = true;
        bloc_main.style.opacity = "1";
        setTimeout(function () {
          bloc_main.hidden = false;
          ajouter_contacts.hidden = true;
          ajouter_contacts.style.opacity = "0";
        }, 300);
        vider();
      } else {
        evenementLignesDuTableau();
      }
    }
  });
}

function uploadImage() {
  var monImage = document.getElementById('monImage');

  (function _callee() {
    var _ref, file, reader;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Swal.fire({
              title: "Select image",
              input: "file",
              inputAttributes: {
                "accept": "image/*",
                "aria-label": "Upload your profile picture"
              }
            }));

          case 2:
            _ref = _context.sent;
            file = _ref.value;

            if (file) {
              reader = new FileReader();

              reader.onload = function (e) {
                Swal.fire({
                  title: "Your uploaded picture",
                  imageUrl: e.target.result,
                  imageAlt: "The uploaded picture"
                });
                urlImage = e.target.result;
                monImage.style.backgroundImage = "url('" + urlImage + "')"; // Remplacement de la classe

                iconModifier.hidden = false;
                iconPlus.hidden = true;
              };

              reader.readAsDataURL(file);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  })();
}

function refresh() {
  var tableauContenue = "";
  var tbody = document.getElementById("tbody");

  for (var i = 0; i < Table_noms.length; i++) {
    tableauContenue += "<tr class='tr'> <th scope='row' class='center_left'> <input class='checkbox' type='checkbox' value=" + i + " style='border-radius:50px;width:50px'></input> <div style='padding-top:10px;padding-bottom:10px;background-image:url(" + Table_urlImage[i] + ");padding-top: 10px;width: 80px;height: 80px;background-repeat: no-repeat;background-position: center;background-size: cover;border-radius: 500px;position: relative;'></div><span style='opacity: 0;'>OO</span>" + Table_prenoms[i] + " " + Table_noms[i] + "</th> <td>" + Table_emails[i] + "</td> <td>" + Table_phones[i] + "</td> <td>" + Table_fonctions[i] + " " + Table_entreprises[i] + "</td> <td>" + Table_libelles_noms[i] + "</td> <td class='lolo' style='text-align: right;opacity: 0;'><i class='fa-solid fa-pen i1' style='padding: 10px;border-radius: 100px;opacity: 1;' title='Modifier Contact'></i><i class='fa-solid fa-ellipsis-vertical i2' style='padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;border-radius: 100px;opacity: 1;' title='Autres actions'></i> <div class='popup'> <div class='popup1'> <div class='pp1 center'><i class='fa-solid fa-trash'></i></div> <div class='pp2 center'>Supprimer</div> </div> <div class='popup2'> <div class='pp3 center'><i class='fa-solid fa-pen'></i></div> <div class='pp4 center'>Modifier</div> </div> </div><input type='number' name='indiceLigne' value=" + i + " hidden> </td> </tr>";
  }

  tbody.innerHTML = tableauContenue;
  tableauContenue = "";
}

function evenementLignesDuTableau() {
  var lignes = document.querySelectorAll('.tr');
  var popup = document.querySelectorAll('.popup');
  var popup2s = document.querySelectorAll('.popup2');
  var popup1s = document.querySelectorAll('.popup1');
  var checkboxs = document.querySelectorAll('.checkbox'); //evenement pour chaque ligne du tableau

  var i1s = document.querySelectorAll('.i1');
  var i2s = document.querySelectorAll('.i2');
  lignes.forEach(function (ligne) {
    ligne.addEventListener('click', function () {
      var indiceLigne = ligne.querySelector('input[name="indiceLigne"]').value;
      indiceLigneLOLO = indiceLigne;
    });
    ligne.addEventListener('mouseover', function () {
      var icon = ligne.querySelector('.lolo');
      icon.style.opacity = "1"; // let popup11 = document.querySelectorAll('.popup');
      // popup11[indiceLigneLOLO].style.opacity ="0"
      // popup11[indiceLigneLOLO].style.visibility = "hidden"

      var voir = ligne.querySelector('.checkbox');

      if (voir.checked) {} else {
        ligne.style.backgroundColor = "#D6EAF850";
      }

      var indiceLigne = ligne.querySelector('input[name="indiceLigne"]').value;
      indiceLigneLOLO = indiceLigne;
    });
    ligne.addEventListener('mouseout', function () {
      var icon = ligne.querySelector('.lolo');
      icon.style.opacity = "0"; // let popup11 = document.querySelectorAll('.popup');
      // popup11[indiceLigneLOLO].style.opacity ="0"
      // popup11[indiceLigneLOLO].style.visibility = "hidden"

      var voir = ligne.querySelector('.checkbox');

      if (voir.checked) {} else {
        ligne.style.backgroundColor = "white";
      }

      var indiceLigne = ligne.querySelector('input[name="indiceLigne"]').value;
      indiceLigneLOLO = indiceLigne;
    });
  });
  i1s.forEach(function (i1) {
    i1.addEventListener('click', function () {
      modifierContact(indiceLigneLOLO);
    });
    i1.addEventListener('mouseover', function () {
      i1.style.backgroundColor = "#34495E";
      i1.style.color = "white";
    });
    i1.addEventListener('mouseout', function () {
      i1.style.backgroundColor = "#34495E00";
      i1.style.color = "black";
    });
  });
  var ouiNon = true;
  i2s.forEach(function (i2) {
    i2.addEventListener('click', function () {
      i2.style.backgroundColor = "#34495E";
      i2.style.color = "white";
      var popup11 = document.querySelectorAll('.popup');

      if (ouiNon === true) {
        popup11[indiceLigneLOLO].style.opacity = "1";
        popup11[indiceLigneLOLO].style.visibility = "visible";
        ouiNon = false;
      } else {
        popup11[indiceLigneLOLO].style.opacity = "0";
        popup11[indiceLigneLOLO].style.visibility = "hidden";
        ouiNon = true;
      }
    });
    i2.addEventListener('mouseover', function () {
      i2.style.backgroundColor = "#34495E";
      i2.style.color = "white";
    });
    i2.addEventListener('mouseout', function () {
      i2.style.backgroundColor = "#34495E00";
      i2.style.color = "black";
    });
  });
  popup1s.forEach(function (popup1) {
    popup1.addEventListener('click', function () {
      supprimerContact(indiceLigneLOLO);
    });
  });
  popup2s.forEach(function (popup2) {
    popup2.addEventListener('click', function () {
      modifierContact(indiceLigneLOLO);
    });
  });
  checkboxs.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        lignes[indiceLigneLOLO].style.backgroundColor = "#AED6F1";
        Table_indices.push(checkbox.value);
        nombreIndice += 1;
        nombreContacts();
      } else {
        lignes[indiceLigneLOLO].style.backgroundColor = "white";

        for (var i = 0; i < Table_indices.length; i++) {
          if (Table_indices[i] === checkbox.value) {
            Table_indices.splice(i, 1);
          }
        }

        nombreIndice -= 1;
        nombreContacts();
      }
    });
  });
}

function suppressionMultipleContacts() {
  var tempReverse = [];
  var tem = Table_indices.sort();

  for (var i = tem.length - 1; i >= 0; i--) {
    tempReverse.push(tem[i]);
  }

  Swal.fire({
    title: "Etes vous sûr ?",
    text: "voulez vous vraiment supprimé " + Table_indices.length + " contact(s) du coup ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, suprime les tous!"
  }).then(function (result) {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Suppression reussie!",
        text: "Impeccable.",
        icon: "success"
      });

      for (var _i2 = 0; _i2 < tempReverse.length; _i2++) {
        Table_noms.splice(tempReverse[_i2], 1);
        Table_prenoms.splice(tempReverse[_i2], 1);
        Table_emails.splice(tempReverse[_i2], 1);
        Table_entreprises.splice(tempReverse[_i2], 1);
        Table_fonctions.splice(tempReverse[_i2], 1);
        Table_phones.splice(tempReverse[_i2], 1);
        Table_urlImage.splice(tempReverse[_i2], 1);
        Table_libelles_noms.splice(tempReverse[_i2], 1);
        nombre_de_contact -= 1;
        nombreIndice -= 1;
      }

      document.getElementById('nombre_contacts_1').textContent = "(" + nombre_de_contact + ")";

      if (nombre_de_contact == 0) {
        bloc_contacts.hidden = true;
        bloc_main.style.opacity = "1";
        setTimeout(function () {
          bloc_main.hidden = false;
          ajouter_contacts.hidden = true;
          ajouter_contacts.style.opacity = "0";
        }, 300);
        nombreContacts();
        vider();
      } else {
        nombreContacts();
        refresh();
        evenementLignesDuTableau();
        Table_indices = [];
      }
    }
  });
}

function nombreContacts() {
  if (nombreIndice > 0) {
    contact_selectionner.style.fontSize = "15px";
    nombre_selectionner.style.fontSize = "14px";
    nombre_selectionner.style.opacity = "1";
    suppressionMultiple.style.fontSize = "14px";
    suppressionMultiple.style.opacity = "1";
    nombre_selectionner.innerHTML = nombreIndice;
  } else {
    contact_selectionner.style.fontSize = "0px";
    nombre_selectionner.style.fontSize = "0px";
    nombre_selectionner.style.opacity = "0";
    suppressionMultiple.style.fontSize = "0px";
    suppressionMultiple.style.opacity = "0";
    nombre_selectionner.innerHTML = nombreIndice;
  }
}

function viderNombreContactSelectionner() {
  document.getElementById('contact_selectionner').style.fontSize = "0px";
  document.getElementById('nombre_selectionner').style.fontSize = "0px";
  document.getElementById('nombre_selectionner').style.opacity = "0";
  document.getElementById('suppressionMultiple').style.fontSize = "0px";
  document.getElementById('suppressionMultiple').style.opacity = "0";
  nombreIndice = 0;
  Table_indices = [];
}

function ajouterLibelle() {
  (function _callee2() {
    var _ref2, url;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Swal.fire({
              title: "Créer un libellé",
              input: "text",
              inputLabel: "libellé contact",
              showCancelButton: true,
              inputValidator: function inputValidator(value) {
                if (!value) {
                  return "Vous devrez saisir quelque chose";
                }
              }
            }));

          case 2:
            _ref2 = _context2.sent;
            url = _ref2.value;

            if (url) {
              Table_libelles.push(url);
              messageAjoueLibelleReussi();
              refreshLibelle();
              evenementLibelle();
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  })();
}

function refreshLibelle() {
  var tab = "";
  var tabSelection = "";

  for (var i = 0; i < Table_libelles.length; i++) {
    tab += "<div class='libelle'><input type='number' value=" + i + " class='editSup' hidden> <div class='libelle_1 center'><img src='img/libelle.PNG' alt='libelle'></div> <div class='libelle_2'><b>" + Table_libelles[i] + "</b></div> <div class='libelle_3'> <i class='fa-solid fa-pen edit' style='padding: 10px;border-radius: 100px;opacity: 1;' title='Modifier libelle'></i><i class='fa-solid fa-trash sup' style='padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;border-radius: 100px;opacity: 1;' title='Supprimer libelle'></i> </div> </div>";
    tabSelection += "<option value='" + Table_libelles[i] + "'>" + Table_libelles[i] + "</option>";
  }

  selection_libelle.innerHTML = tabSelection;
  tout_les_libelles.innerHTML = tab;
}

var indiceeditSup = 0;

function evenementLibelle() {
  var libelles = document.querySelectorAll('.libelle');
  var edits = document.querySelectorAll('.edit');
  var sups = document.querySelectorAll('.sup');
  libelles.forEach(function (libelle) {
    libelle.addEventListener('click', function () {
      indiceeditSup = libelle.querySelector('.editSup').value;
    });
    libelle.addEventListener('mouseover', function () {
      libelle.querySelector('.libelle_3').style.visibility = "visible";
      libelle.querySelector('.libelle_3').style.opacity = "1";
      indiceeditSup = libelle.querySelector('.editSup').value;
    });
    libelle.addEventListener('mouseout', function () {
      libelle.querySelector('.libelle_3').style.visibility = "hidden";
      libelle.querySelector('.libelle_3').style.opacity = "0";
      indiceeditSup = libelle.querySelector('.editSup').value;
    });
  });
  edits.forEach(function (edit) {
    edit.addEventListener('click', function () {
      (function _callee3() {
        var _ref3, url;

        return regeneratorRuntime.async(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                inputValue = Table_libelles[indiceeditSup];
                _context3.next = 3;
                return regeneratorRuntime.awrap(Swal.fire({
                  title: "Modifier le libellé",
                  input: "text",
                  inputLabel: "libellé contact",
                  inputValue: inputValue,
                  showCancelButton: true,
                  inputValidator: function inputValidator(value) {
                    if (!value) {
                      return "Vous devrez saisir quelque chose";
                    }
                  }
                }));

              case 3:
                _ref3 = _context3.sent;
                url = _ref3.value;

                if (url) {
                  Table_libelles[indiceeditSup] = url;
                  messageModificationLibelleReussi();
                  refreshLibelle();
                  evenementLibelle();
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        });
      })();
    });
  });
  sups.forEach(function (sup) {
    sup.addEventListener('click', function () {
      for (var i = 0; i < Table_libelles_noms.length; i++) {
        for (var y = 0; y < Table_libelles_noms[i].length; y++) {
          if (Table_libelles[indiceeditSup] === Table_libelles_noms[i][y]) {
            Table_libelles_noms[i].splice(indiceeditSup, 1);
            y = Table_libelles_noms[i].length;
          }
        }
      }

      Table_libelles.splice(indiceeditSup, 1);
      refresh();
      refreshLibelle();
      evenementLibelle();
      evenementLignesDuTableau();
    });
  });
}

function vider() {
  document.getElementById('nom').value = "";
  document.getElementById('prenom').value = "";
  document.getElementById('entreprise').value = "";
  document.getElementById('fonction').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "+243";
  prenom.style.borderColor = "#E5E7E9";
  nom.style.borderColor = "#E5E7E9";
  email.style.borderColor = "#E5E7E9";
  phone.style.borderColor = "#E5E7E9";
  urlImage = "";
  iconModifier.hidden = false;
  iconPlus.hidden = true;
  Table_libelles_noms_solo = [];
  refreshLibelle();
}