document.querySelector("#topPicks > div:nth-child(3) > div > div.col-xs-12.col-sm-4.listing-hotels-slider-box > div:nth-child(1) > div > button.slick-next.slick-arrow")

document.querySelector("#rangeSlider")






function displayMetas(meta,pages_details_view) {
$(".listing-hotels-nav-text").text(`Showing Results ${pages_details_view.start}-${pages_details_view.end} of ${meta.total_count}`);
$(".total_results").text(meta.total_count);
let pagination_text = `<li 
        ${!pages_details_view.hasOwnProperty("prev_page_link") ? `class="disabled"` : ''}
            >
                <a ${pages_details_view.hasOwnProperty("prev_page_link") ? `href="${pages_details_view.prev_page_link.replace('&is_ajax=1','')}"` : ''}
                aria-label="Previous" rel="prev"><span aria-hidden="true"> Previous</span></a>
            </li>
            `;
pages_details_view.pages.forEach(page_view => {
    pagination_text += `
    ${page_view.hasOwnProperty('active') }
    ${page_view.url.replace('&is_ajax=1','')}${page_view.page}
    


// <li 
// ${!pages_details_view.hasOwnProperty("next_page_link") ? `class="disabled"` : ''}
// >
//     <a ${pages_details_view.hasOwnProperty("next_page_link") ? `href="${pages_details_view.next_page_link.replace('&is_ajax=1','')}"` : ''}
//     aria-label="Previous" rel="prev"><span aria-hidden="true"> Previous</span></a>
// </li>
// `;










$(document).ready(function () {
    if(typeof(display_pending_faq) == 'function'){
        display_pending_faq("25")
    }
   })
   $("#add-faq-form").submit(function(e){
       e.preventDefault();
    })








// // ANTICLICK JACK-==========================================================================


var antiClickjack = document.getElementById("antiClickjack");
antiClickjack.innerHTML = "body{display:none !important;}";
if (self === top) {
    antiClickjack.parentNode.removeChild(antiClickjack);
} 
else {
    top.location = self.location;
}










