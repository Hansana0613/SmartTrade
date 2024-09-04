async function signIn() {

    const user_dto = {
        first_name: document.getElementById("email").value,
        last_name: document.getElementById("password").value,
    };
    const response = await fetch(
            "SignIp",
            {
                method: "POST",
                body: JSON.stringify(user_dto),
                headers: {
                    "Content-Type": "application/json"
                }
            }

    );
    if (response.ok) {

        const json = await response.json();
        if (json.success) {
            window.location = "index.html";

        } else {

            if (json.content === "Unverified") {
                window.location = "verify-account.html"
            } else {
                document.getElementById("message").innerHTML = json.content;
            }
        }

    } else {
        document.getElementById("message").innerHTML = "Please try again later!";
    }    
}

