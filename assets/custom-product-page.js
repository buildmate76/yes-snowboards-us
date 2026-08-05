document.addEventListener("DOMContentLoaded", function () {
  const variantSelector = document.querySelector('[name="id"]')
  if (variantSelector) {
    variantSelector.addEventListener("change", function (event) {
      const selectedVariantId = event.target.value

      const variant = window.meta.product.variants.find(v => v.id == selectedVariantId)

      if (variant && variant.sku) {
        const skuElement = document.querySelector(".currentSKU span")
        if (skuElement) {
          skuElement.textContent = variant.sku
        }
      }
    })
  }
})
