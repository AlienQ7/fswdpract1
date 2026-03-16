<script>

        document.getElementById("form").addEventListener("submit", function (e) {

            e.preventDefault();

            const formData = new FormData(this);

            const data = {
                name: formData.get("name"),
                father_name: formData.get("father_name"),
                aadhaar_number: formData.get("aadhaar_number"),
                email: formData.get("email"),
                password: formData.get("password"),
                education: formData.get("education"),
                gender: formData.get("gender"),
                dob: formData.get("dob"),
                account_name: formData.get("account_name"),
                bank_name: formData.get("bank_name"),
                account_number: formData.get("account_number"),
                ifsc: formData.get("ifsc")
            };

            fetch("https://nsedm.nielitkohima.in/api/mca_practical_form.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log("success:", result);
                    alert("data submitted successfully")
                });

        });

    </script>
