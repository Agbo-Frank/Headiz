    var slides = document.querySelectorAll('.headiz_slide .slide')
    var dots = document.querySelectorAll('.dot-container .dot')
    var Bslide = document.querySelectorAll('.Bslide')
    var dots_b = document.querySelectorAll('.dot-container-b .dot-b')
    var counter = 0
  
    function showslide(n) {
        slides.forEach((slide) => {
            slide.style.display = 'none'
        })
        dots.forEach((dot) => {
            dot.classList.remove('active')
        })
        slides[n].style.display = 'block'
        dots[n].classList.add('active')

    }
    function BB(n) {
        Bslide.forEach((board) => {
            board.style.display = 'none'
        })
        dots_b.forEach((dot) => {
            dot.classList.remove('active1')
        })
        Bslide[n].style.display = 'flex'
        dots_b[n].classList.add('active1')

    }
    function next(){
        if(counter > slides.length -2){
            counter = 0
            showslide(counter)
            
        }
        else{
            counter++
            showslide(counter)
        }
    }
    function BBnext(){
        if(counter > Bslide.length - 2){
            counter = 0
            BB(counter)
        }
        else{
            counter++
            BB(counter)
        }
    }
    function prev(){
        if(counter > slides.length - 2){
            counter = 0
            showslide(counter)
        }
        else{
            counter--
            showslide(counter)
        }
    }
     setInterval(next, 10800)
     setInterval(BBnext, 10000)
     
    var show_password = document.querySelectorAll('.password span')
    var password_is_showing = false

    show_password.forEach((password) => {
        password.addEventListener('click', (e) => {
            var password_input = e.target.previousElementSibling
            if(password_is_showing){
                password_input.setAttribute('type', 'password')
                password.innerHTML = 'visibility'
                password_is_showing = false
            }
            else{
               password_input.setAttribute('type', 'text')
               password.innerHTML = 'visibility_off'
               password_is_showing = true
            }
        })
    })

    var favorites = document.querySelectorAll('.items .item div span')
    var cards = document.querySelectorAll('.cards .card div span')

   favorites.forEach((favorite) => {
    var favoured = true
       favorite.addEventListener('click', (e) => {
           if(favoured){
               e.target.innerHTML = 'favorite'
               favoured = false
           }
           else{
               e.target.innerHTML = 'favorite_border'
               favoured = true
           }
       })
   })
   cards.forEach((favorite) => {
       favorite.addEventListener('click', (e) => {
           if(favoured){
               e.target.innerHTML = 'favorite'
               favoured = false
           }
           else{
               e.target.innerHTML = 'favorite_border'
               favoured = true
           }
       })
   })

    var radios = document.querySelectorAll(".pay-field .radio")
    var radio_checked = true

    radios.forEach((radio) => {
        radio.addEventListener('click', (e) => {
        if(radio_checked){
        e.target.innerHTML = 'radio_button_unchecked'
        radio_checked = false
    }
    else{
        e.target.innerHTML = 'radio_button_checked'
        radio_checked = true
    }
    })
    })

    var menu_bar = document.querySelector('header #menu-bar')
    var overlay1 = document.querySelector('.overlay1')

    menu_bar.addEventListener('change', (e) => {
        var categories = e.target.parentElement.nextElementSibling
        if(menu_bar.checked){
            categories.style.display = 'block'
            overlay1.style.display = 'block'
        }
        else{
            categories.style.display = 'none'
            overlay1.style.display = 'none'
        }
    })

    // PROFILE PICTURE
    var profile_pics = document.querySelector('.profile-pics')
    var profile_pics_input = document.querySelector('#DP')
    var drag_array =  ['dragleave', 'dragend', 'drop']

    profile_pics.addEventListener('dragover', e => {
        e.preventDefault()
        profile_pics.classList.add('profile-pics-over')
    })
    drag_array.forEach(type => {
        profile_pics.addEventListener(type, e => {
            e.preventDefault()
            profile_pics.classList.remove('profile-pics-over')
        })
    })
     profile_pics.addEventListener('drop', e => {
        var profile_pics_img = document.querySelector('.profile-pics img')
         profile_pics_input.files = e.dataTransfer.files

         if(!profile_pics_img){
             profile_pics_img = document.createElement('img')
             profile_pics.appendChild(profile_pics_img)
             profile_pics_img.src = URL.createObjectURL(e.dataTransfer.files[0]) 
         }
         else{
            profile_pics_img.src = URL.createObjectURL(e.dataTransfer.files[0])
         }
         
     })
     profile_pics.addEventListener('click', e => {
         profile_pics_input.click()
     
     profile_pics_input.addEventListener('change', e => {

        var profile_pics_img = document.querySelector('.profile-pics img')
        //  profile_pics_input.files = e.dataTransfer.files

         if(!profile_pics_img){
             profile_pics_img = document.createElement('img')
             profile_pics.appendChild(profile_pics_img)
             if(e.target.files.type.startsWith("image/")){
                profile_pics_img.src = URL.createObjectURL(e.target.files[0])  
            }
        } 
            else{
                profile_pics_img.src = URL.createObjectURL(e.target.files[0])
            }
     })
    })



     //UPLOADED PRODUCT

    

    
    var search = document.querySelector('#search2')
    var product_card = document.querySelectorAll('.product-card')

    search.addEventListener('keyup', e => {
        e.preventDefault()
        var input = search.value.toLowerCase()

        product_card.forEach(card => {
            var div = card.querySelector('div')
                var p = div.children[1].textContent
               var pl = p.toLowerCase()
               if(pl.indexOf(input) == -1){
                   card.style.display = 'none'
               }
               else{
                   card.style.display = 'block'
               }
            })
    })

        var search = document.querySelector('#search2')
        var product_card = document.querySelectorAll('.product-card')

        search.addEventListener('keyup', e => {
            e.preventDefault()
            var input = search.value.toLowerCase()

            product_card.forEach(card => {
                var div = card.querySelector('div')
                    var p = div.children[1].textContent
                   var pl = p.toLowerCase()
                   if(pl.indexOf(input) == -1){
                       card.style.display = 'none'
                   }
                   else{
                       card.style.display = 'block'
                   }
                })
        })

        
        var search1 = document.querySelector('#search1')
        var table = document.querySelectorAll('tbody tr')

        search1.addEventListener('keyup', e => {
            var input = e.target.value.toLowerCase()

            table.forEach(tr => {
            var td = tr.children[1]
            let p = td.children[1].textContent
            p = p.toLowerCase()
            if(p.indexOf(input) == -1){
                tr.style.display = 'none'
            }
            else{
                tr.style.display = 'table-row'
            }
        })
        })

       //CART
       var dels = document.querySelectorAll('#remove')
       var cart = document.querySelector('#cart')
       var cart_length = dels.length
       cart.innerHTML = cart_length
       dels.forEach(del => {
           del.addEventListener('click', e => {
               let item = e.target.closest('.saved-item')
               let items = document.querySelector('.saved-items')
   
               items.removeChild(item)
               cart_length--
               cart.innerHTML = cart_length
   
           })
       })