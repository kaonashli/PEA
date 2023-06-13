// variables >
const NAV = {
    "Index" : []
    , "Initiation" : ["Process", "Team Environment", "Project Management"]
    , "Construction" : ["Requirements", "Analysis", "Design", "Implementation", "Test"]
    , "Release" : ["Deployment", "Training"]
    , "Maintenance" : []
    , "Communications" : []
};
const BANNER = `<div id="title-logo-container">
                <a href="../index.html"><img id="logo" src="../images/logo.svg" alt="PEA Logo" /></a> 
                <div id="title-container">
                <h2>Program Exit Assessment</h2>
                <h2>Ashley Boily</h2>
                
                <div id="info">Heritage College |
                Computer Science Program |
                2020</div>
                </div>
                </div>`;
const FOOTER = `<p>© <a href="mailto:1221230@cegep-heritage.qc.ca">Ashley Boily</a>,
            <a href="http://www.cegep-heritage.qc.ca/Programs/Computer_Science/index.php">Computer Science</a>,
            <a href="https://www.cegep-heritage.qc.ca/">Cegep Heritage College</a>, 2020.  All Rights Reserved.</p>`;
const URL = window.location.pathname;
const CURRENT = URL.substring(URL.lastIndexOf('/') + 1, URL.length - 5).toLowerCase();
const STICKY = 140;

$(document).ready(function (){
    // banner >
    function addBanner() {
        $("#banner").append(BANNER);
    }
    // footer >
    function addFooter() {
        $("footer").append(FOOTER).addClass("fixed-bottom");
    }
    // navigation >
    function addNavigationBar() {
        // navigation bar >
        $("#nav-bar").addClass("navigation navbar-expand-lg navbar-dark").append(`<button id="toggle-button" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>`);


        // navigation links >
        for (let item in NAV) {
            let lowerCase = item.toLowerCase().replace(" ", "-");
            if (NAV[item].length === 0) {
                // links with no dropdown >
                $("#nav-bar-list").append(
                    `<li class="nav-item" id="nav-${lowerCase}">
                <a class="nav-link" id="${lowerCase}" href="${lowerCase}.html">${item}</a>
                </li>`);
                //breadcrumb >
                if (lowerCase === CURRENT) {
                    $(`#${lowerCase}`).addClass("active");
                }
            } else {
                // links with dropdown >
                $("#nav-bar-list").append(
                    `<li class="nav-item dropdown" id="nav-${lowerCase}">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink${item}" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${item}</a>
                <div id="nav-list-${item}" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"></div>
                </div>
                </li>`);
                // dropdown >
                for (let liIndex in NAV[item]) {
                    let lowerCaseLI = NAV[item][liIndex].toLowerCase().replace(" ", "-");
                    $(`#nav-list-${item}`).append(
                        `<a href="${lowerCaseLI}.html" class="dropdown-item" id="nav-${lowerCaseLI}">${NAV[item][liIndex]}</a>`
                    );
                    // breadcrumb >
                    if (lowerCaseLI === CURRENT) {
                        $(`#nav-${lowerCaseLI}`).addClass("active");
                        $(`#nav-${lowerCase}`).addClass("active");
                    }
                }
            }
        }
        $("#index").html("Home").attr("href", "../index.html");
    }
    // header typing animation >
    function addHeaderAnimation(){
        let page_title = $("#page-title").text();

        function type() {
            $("#typing-title").append(page_title.substring(0, 1));
            page_title = page_title.substr(1);
            if (page_title.length === 0) {
                clearInterval(typingInterval);
            }
        }
        let typingInterval = setInterval(type, 100);
    }
    // sticky navigation on large breakpoint >
    function addStickyNavigation() {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= STICKY) {
                $("#navbarNavDropdown").addClass("sticky");
            } else {
                $("#navbarNavDropdown").removeClass("sticky");
            }
        });
    }

    if (CURRENT !== "index" && CURRENT !=="/pea/"){
        addBanner();
        addFooter();
        addNavigationBar()
    }
    addHeaderAnimation();
    addStickyNavigation();
});



