import main,{cartTotal} from './main';
export function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}
export const readCookie = () =>{
    let allcookies = getCookie('shopping_cart'),
        decodedData = decodeURIComponent(allcookies),
        jsonObject = JSON.parse(decodedData);
        return Object.keys(jsonObject).reduce((t, key) => {
            return t + parseInt(jsonObject[key]['item_quantity'])
        },0)
}
export function shakeCart(){
    var cart = document.querySelector(".icon-cart");
    cart.classList.add("shake");
    setTimeout(function(){
        cart.classList.remove("shake");
        },1000);
}

jQuery(document).ready(function ($) {
    $('#apply-coupon').on('click', function () {
        var val = $('[name="coupon"]');
        if (readCookie()>0) {
            if(val.val()){
                $('#apply-coupon').addClass('bg-gray')
                $.ajax({
                    type: "get",
                    url: "/wp-admin/admin-ajax.php",
                    data: {
                        action: 'coupon',
                        data: val.val()
                    },
                    dataType: "json",
                    success: function (response) {
                       if(response.success && response.data != null){
                           $('.discount').attr('data-value',response.data)
                           cartTotal();
                           $('[name="ma-giam-gia"]').val(val.val());
                           $('#apply-coupon').removeClass('bg-gray');
                           $('.mess').append('<p class="flush-content">Bạn được giảm '+response.data+'%</p>')
                           setTimeout(function () {
                            $('.flush-content').remove()
                            },7000)
                       }else{
                        $('#apply-coupon').removeClass('bg-gray');
                            $('.mess').append('<p class="flush-content">Mã giảm giá không hợp lệ</p>')
                            setTimeout(function () {
                                $('.flush-content').remove()
                            },7000)
                            }
                     }
                    });
            }else{
                val.focus();
                val.addClass('error')
                $('.mess').append('<p class="flush-content">Chưa nhập mã giảm giá</p>')
                setTimeout(function () {
                    $('.flush-content').remove()
                },5000)
                setTimeout(function () {
                    val.removeClass('error')
                },1000)
                }
        }else{
            $('.mess').append('<p class="flush-content">Giỏ hàng trống</p>')
            setTimeout(function () {
                $('.flush-content').remove()
            },5000)
        }
      });
    $('.btn-add-cart').click(function (e) {
        e.preventDefault();
        $(this).addClass('bg-gray').removeClass('bg-primary');
        var id = $('[name="hidden_id"]').val(),
            quantity = $('[name="quantity"]').val();
        $.ajax({
            type: "post",
            url: "/wp-admin/admin-ajax.php",
            datatype: "json",
            data: {
                action: "add_to_cart",
                id: id,
                quantity: quantity
            },
            success: function (response) {
                $('.btn-add-cart').addClass('bg-primary').removeClass('bg-gray');
                shakeCart();
                if (response.success) {
                    $('.hl-cart-total').html(readCookie())
                }
            }
        });
    });
    $('.update-cart').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('bg-gray').removeClass('color-primary');
        $('.loading-aj').css('z-index', '1');
        var arr = [];
        document.querySelectorAll('.quality-product-input').forEach(function (e) {
          var input = e.querySelector('input'),
              id = input.getAttribute('data-id'),
              val = input.value;
          arr.push({
            id: id,
            quantity: val
          });
        });
        $.ajax({
          type: "post",
          url: "/wp-admin/admin-ajax.php",
          data: {
            action: "updatecart",
            data: arr
          },
          dataType: "json",
          success: function success(response) {
            $('.update-cart').addClass('color-primary').removeClass('bg-gray');
            $('.loading-aj').css('z-index', '-1');
            shakeCart();
            if (response.success) {
                $('.hl-cart-total').html(readCookie())
            }
            
          }
        });
      });
});
var path = window.location.pathname;
path = path.replace(/\/$/, "");
path = decodeURIComponent(path);
document.querySelectorAll("#primary-menu li a").forEach(link => { 
    var url = link.href,
         li = new URL(url).pathname;
    if(path.substring(0, li.length) === li.replace(/\/$/,'')){
        link.parentElement.classList.add('active')
    }
 })
if(window.matchMedia("(max-width: 1024px)").matches){
    document.querySelectorAll(".navigation-mobile li a").forEach(mb => { 
        var mbl = mb.href,
             mbp = new URL(mbl).pathname;
        if(path.substring(0, mbp.length) === mbp.replace(/\/$/,'')){
            mb.parentElement.classList.add('active')
        }
     })
}