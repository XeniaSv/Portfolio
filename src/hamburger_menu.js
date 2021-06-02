let ham = document.querySelector(".hamburger");

ham.onclick = function() {
        let elements = document.getElementsByClassName("menu_bar")

        if (elements[0].style.display === "none")
        {
                for (let i = 0; i < elements.length; i++) {
                        elements[i].style.display = "block";
                }
        }
        else {
                for (let i = 0; i < elements.length; i++) {
                        elements[i].style.display = "none";
                }
        }
}
