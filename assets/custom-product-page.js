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

	const productSection = document.querySelector('[id^="MainProduct-"]')
	if (!productSection) return

	const updateBackInStockState = () => {
		const trigger = productSection.querySelector(".klaviyo-bis-trigger")
		const addButton = productSection.querySelector(".product-form__submit")
		if (!trigger || !addButton) return

		const triggerShouldBeVisible = addButton.disabled
		const desiredDisplay = triggerShouldBeVisible ? "block" : "none"

		if (trigger.style.display !== desiredDisplay) {
			trigger.style.display = desiredDisplay
		}

		trigger.setAttribute("aria-hidden", String(!triggerShouldBeVisible))
		trigger.setAttribute("tabindex", triggerShouldBeVisible ? "0" : "-1")

		productSection.classList.toggle("has-visible-back-in-stock", triggerShouldBeVisible)
	}

	updateBackInStockState()

	new MutationObserver(updateBackInStockState).observe(productSection, {
		attributes: true,
		attributeFilter: ["disabled", "style"],
		childList: true,
		subtree: true,
	})
})
