document.addEventListener("DOMContentLoaded", function () {
  let priceTemplate = document.querySelector('[id^="price-template"]');
  let priceBlock = document.querySelector(".shopify-app-block .price")

  if (priceBlock && !priceBlock.classList.contains("hide")) {
      priceTemplate.style.display = "none"
  }
})
