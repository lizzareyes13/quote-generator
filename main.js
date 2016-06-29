function getQuote(){
$.ajax({
  url: "http://fvi-grad.com:4004/quote",
  success: function(resp,txt,anon){
    console.log(resp);
    $("#ranQuote").html(resp.quote)
    //here we have what happens when server responds
    $.ajax({
      url: "http://fvi-grad.com:4004/quote",
      success: function(resp,txt,anon){
        console.log(resp);
        $("#ranAuthor").html(resp.author)
      }
    })
  }
})
}
$(document).ready( getQuote);
$(".btn").on("click", getQuote);
