let image = document.getElementById('les_images');
let nombre_contacts = document.getElementById('nombre_contacts');

    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell1.png)';
        image.style.opacity = "1";
    }, 300);
    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png)';
    }, 1000);
    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell4.png)';
    }, 1800);

    let bool = true;
    function nav()
    {
        let largeurEcran = window.innerWidth
        let Nav = document.getElementById('Nav');

        let main1 = document.getElementById('main_1');
        let main2 = document.getElementById('main_2');

        let CreerC__main = document.getElementById('CreerC__main');
        let Cont__main = document.getElementById('Cont__main');
        let libelle__main = document.getElementById('libelle__main');

        let icon1 = document.getElementById('icon1');
        let icon2 = document.getElementById('icon2');
        let icon3 = document.getElementById('icon3');

        let CreerC = document.getElementById('CreerC');
        let Cont = document.getElementById('Cont');
        let libelle = document.getElementById('libelle');
        
        if(largeurEcran > 1280)
        {
            if( bool == true)
            {
                main1.style.width = "0vw";
                
                main2.style.width = "100vw";
                main2.style.paddingRight = "40px"
    
                CreerC.style.width = "0vw";
                CreerC.style.fontSize = "0vw";
                Cont.style.width = "0vw";
                Cont.style.fontSize = "0vw";
                libelle.style.fontSize = "0px"
                icon1.style.fontSize = "0px"
                icon2.style.fontSize = "0px"
                icon3.style.fontSize = "0px"
    
                bool = false ;
            }
            else
            {
                main1.style.width = "21vw";
                main2.style.width = "79vw";
                main2.style.paddingRight = "20px"
    
                CreerC.style.width = "13vw";
                CreerC.style.fontSize = "15px";
                Cont.style.width = "15vw";
                Cont.style.fontSize = "15px";
                libelle.style.fontSize = "17px"
                icon1.style.fontSize = "20px"
                icon2.style.fontSize = "20px"
                icon3.style.fontSize = "20px"
                bool = true
            }
        }
        else
        {
            if(largeurEcran < 470)
            {
                Nav.style.left = "0px"
                Nav.style.width = "70vw"
                CreerC__main.style.width = "60vw";
                Cont__main.style.width = "60vw";
                libelle__main.style.width = "60vw";
            }
            else
            {
                Nav.style.left = "0px"
                Nav.style.width = "300px"
                CreerC__main.style.width = "200px";
                Cont__main.style.width = "250px";
                libelle__main.style.width = "250px";
            }
            
        }
       
        
    }
    function deNav()
    {
        let Nav = document.getElementById('Nav');
        Nav.style.left = "-70vw"
    }

/* Debut affichage button effacer Email */
    let elements = document.querySelectorAll('.ajout3TEmail');
    elements.forEach(function(element) {
            // Ajoute un écouteur d'événements de clic à chaque élément
            element.addEventListener('mouseover', function() {
                let idUtilisateurs = element.querySelector('i');
                idUtilisateurs.style.opacity = "1"

            });
            element.addEventListener('click', function() {
                let idUtilisateurs = element.querySelector('i');
                idUtilisateurs.style.opacity = "1"

            });
            element.addEventListener('mouseout', function() {
                let idUtilisateurs = element.querySelector('i');
                idUtilisateurs.style.opacity = "0"

            });
        });
/* Fin affichage button effacer Email */