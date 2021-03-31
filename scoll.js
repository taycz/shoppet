$(document).ready(function () {
  
    if (window.pageYOffset > 40) {

        $(".navs").css("background-color", "azure");


    }
    else {
        $(".navs").css("background-color", "#fff2f000");
    }
    $(document).on('scroll', function (e) {
        if (window.pageYOffset > 40) {

            $(".navs").css("background-color", "azure");


        }
        else {
            $(".navs").css("background-color", "#fff2f000");
        }
    });
    $('#goshopping').on('click', function () {
        document.querySelector('.content5').scrollIntoView({
            behavior: 'smooth'
        })
    })
    let qYt = () => {
        let i = 1;
        $('.sum').on('click', function () {
            i++;
            $('#qYt').html(i);
        })
        $('.sub').on('click', function () {

            if (i <= 1) {
                return false;
            }
            i--;
            $('#qYt').html(i);
        })
    }
    qYt()

    //   obj
    const product = () => {
        let objProduct = new Object();
        objProduct = {
            nameProduct: 'We cat foot',
            priceProduct: [20, 40, 60],
            sizeProduct: ['s', 'm', 'l'],
            img: ["sp1.webp", "sp1b.jpg", "sp1c.jpg"],
            colorProduct: ["red", "blue", "grey"]
        }
        return objProduct
    }
    product()
    //    active-pd
    let activepd = true;
    const choosesize = () => {
        return activepd
    }
    choosesize();
    $('.sizeSML').on('click', function () {
        if (activepd) {
            $('.sizeSML').removeClass('active-size');
            $(this).addClass('active-size');

            for (let i = 0; i < product().sizeProduct.length; i++) {
                if (product().sizeProduct[i] === String($(this).html().toLowerCase())) {
                    $('.add-price').html(product().priceProduct[i] + "$")
                }
            }
        }
        choosesize();
    })
    //   choose-color
    $('.txtchoose-color').on('click', function () {
        if (activepd) {
            $('.txtchoose-color').removeClass('box-choosecolor');
            $(this).addClass('box-choosecolor');
            for (let i = 0; i < product().colorProduct.length; i++) {
                if (product().colorProduct[i] === String($(this).html().toLowerCase())) {
                    $('img#change-img').attr('src', product().img[i])
                }
            }
        }
        choosesize();
    })
    // choose-img
    $('.size-product img').on('click', function () {
        // $(this).attr('src')
        $('img#change-img').attr('src', $(this).attr('src'))
    })
    // Add to cart
    let productAdd = [];
    let addtocart = new Object();
    $('.addtocartTxt').on('click', function () {
        const container = $(this).closest('.addtocart')
        const title = container.find('.cart-right-content a').text()
        const price = container.find('.add-price').text()
        const img = container.find('#change-img').attr('src')
        const qYt = container.find('#qYt').text()
        const size = container.find('.active-size').text()
        const color = container.find('.txtchoose-color.box-choosecolor').text()
        addtocart = {
            
            titleadd: title,
            priceadd: price,
            sizeadd: size,
            qYtadd: qYt,
            coloradd: color,
            imgadd: img
        }
        productAdd.push(addtocart)
        $('.buttonOpenModal').trigger('click')
        Showcart()
    })
    // go to shopping Button =>>>>>>>>>>>>
      $('#goshopping').on('click',function(){
        $('.buttonOpenModal').trigger('click')
        
      })
    $('.buttonOpenModal').on('click',function(){
        $('#exampleModalCenterShop').modal('toggle')
        $('#exampleModalCenteraddtocart').modal('hide')
    })
    //  Show cart
    const Showcart = () => {
       
        let sumitems = 0;
        let sumtotals = 0;
        let showHTML = '';
        for (let i = 0; i < productAdd.length; i++) {
            let totals = parseInt(productAdd[i].priceadd) * productAdd[i].qYtadd;
            sumitems += parseInt(productAdd[i].qYtadd);
            sumtotals += parseInt(totals);
            showHTML += `<tr class="trShow" data-index="${i}">
        <th class="bodertb img-product">
            <img src="${productAdd[i].imgadd}" alt="">
            <div class="product-name">
                <span>${productAdd[i].titleadd}</span>
                <span>${productAdd[i].sizeadd}</span>
                <span class="colorProduct">${productAdd[i].coloradd}</span>
                <span ></span>
                <span></span>
            </div>
            <span></span>
        </th>
        <th class="bodertb">
        ${productAdd[i].priceadd}
        </th>
        <th class="bodertb txt-tb">
            ${productAdd[i].qYtadd}
        </th>
        <th class="bodertb">${totals}$</th>
        <th class="bodertb">
            <img class="icon-delete" src="delete.svg" alt="">
        </th>

    </tr>`
        }
        $('#subtotal').html(sumtotals+'$')
        $('#qYt').html(1)
        $('.number-sp,.txtItems').html(sumitems)
        $('.tableShow').empty().append(showHTML);
        if(productAdd.length>0){
            $('.text-totals').css('display','none')
            $('.modal-header.total-oder').css('visibility','visible')
        }
        else{
            $('.modal-header.total-oder').css('visibility','hidden')
            $('.text-totals').css('display','block')
        }
        qYt()
    }
    Showcart()
    // delete product
    $('body').on('click', '.icon-delete', function (e){
        let x=$(this).closest('.trShow').attr('data-index'); 
          productAdd.splice(x,1)
        Showcart()
    })
});

var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
new FlipDown(twoDaysFromNow, "shoppet1").start();
// Search
