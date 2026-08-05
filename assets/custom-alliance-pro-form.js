document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.includes("?code-only")) {
    const hideField = el => {
      if (!el) return
      const wrap = el.closest?.(".field") || el
      wrap.style.setProperty("display", "none", "important")
      wrap.setAttribute("hidden", "hidden")
      wrap.classList.add("is-hidden")
    }

    document.querySelectorAll("#MainContent form .field").forEach(field => {
      // conditions to hide field
      const firstNameInput = field.querySelector("input#application_first_name")
      const lastNameInput = field.querySelector("input#application_last_name")
      const emailInput = field.querySelector("input#application_email")
      const savedAddressesInput = field.querySelector("select#SavedAddresses")
      const address1Input = field.querySelector("input#application_address1")
      const address2Input = field.querySelector("input#application_address2")
      const cityInput = field.querySelector("input#application_city")
      const countryInput = field.querySelector("select#application_country")
      const zipInput = field.querySelector("input#application_zip")
      const phoneInput = field.querySelector("input#application_phone")
      const organizationInput = field.querySelector("input#application_organization")
      const organizationRoleInput = field.querySelector("input#application_organization_role")
      const notesInput = field.querySelector("textarea#application_applicant_notes")
      const documentsInput = field.querySelector("file-upload")
      const approvalCodeInput = field.querySelector("input#application_approval_code")

      // Hide the entire field blocks (only if they exist)
      hideField(emailInput)
      hideField(savedAddressesInput)
      hideField(address1Input)
      hideField(address2Input)
      hideField(cityInput)
      hideField(countryInput)
      hideField(zipInput)
      hideField(phoneInput)
      hideField(notesInput)
      hideField(documentsInput)
      // If you also want to hide these, uncomment:
      // hideField(firstNameInput)
      // hideField(lastNameInput)
      // hideField(organizationInput)
      // hideField(organizationRoleInput)
      // hideField(approvalCodeInput)
    })

    // Province can live outside the loop's current field; hide its container or itself
    setTimeout(function () {
      ;(function () {
        const provinceContainer =
          document.querySelector("#AddressProvinceContainer") ||
          document.querySelector("#application_province")
        hideField(provinceContainer)
      })()
    }, 1100)

    document.querySelectorAll(".ap-help").forEach(helpElement => {
      helpElement.style.setProperty("display", "none", "important")
      helpElement.setAttribute("hidden", "hidden")
    })

    document
      .querySelectorAll(
        "#MainContent form input[required], #MainContent form textarea[required], #MainContent form select[required]"
      )
      .forEach(el => {
        el.removeAttribute("required")
      })
  }
})
