
 document.getElementById("addLanguageButton").addEventListener("click", function() {
            var languageFieldset = document.getElementById("languageFieldset");
            var languageEntry = document.createElement("div");
            languageEntry.className = "languageEntry";
            languageEntry.innerHTML = `
                <label for="languageName">Language Name:</label>
                <input type="text" class="languageName" name="languageName" required><br><br>
            `;
            languageFieldset.appendChild(languageEntry);
        });

{% comment %} 

 document.getElementById("myForm").addEventListener("submit", function(event) {
            // Create user data object
            var userData = {
                name: document.getElementById("fName").value
                , lastName: document.getElementById("lName").value
                , address: document.getElementById("Address").value
                , city: document.getElementById("city").value
                , country: document.getElementById("country").value
                , email: document.getElementById("Email").value

            };
            //-------------------------------------------
            // Create language data array
            var languageData = [];
            // Get all language name inputs
            var languageInputs = document.querySelectorAll(".languageName");
            languageInputs.forEach(function(input) {
                languageData.push(input.value);
            });

            // ---------------------------------------





            //----------------------------------------
            // Construct final form data object
            var formData = {
                user_data: userData,
                languages: languageData
            };

            // Create a hidden input field to store form data
            var formDataInput = document.createElement("input");
            formDataInput.type = "hidden";
            formDataInput.name = "formData";
            formDataInput.value = JSON.stringify(formData);
            // this.appendChild(formDataInput);
            // Add the form data input to the form
            myForm.appendChild(formDataInput);
            
        }); {% endcomment %}
