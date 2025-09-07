// Main Tabbed Content : On a regular tab open the default sub tab/ overview except for the home page with no sub tabs
function openTab(event, tabName) {
    var i, tabcontent, tablinks, sublinks, subtabcontent;
    subtabcontent = document.getElementsByClassName("subtabcontent");
    sublinks = document.getElementsByClassName("sublinks");
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    // Hide all tab and subtab contents by default
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab links & subtab links
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    for (i = 0; i < sublinks.length; i++) {
        sublinks[i].className = sublinks[i].className.replace(" active", "");
    }

    // Show the current tab and add 'active' class to the clicked tab link, if it has subtabs click the default subtab
    if (tabName == "HomePage") {
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
        document.getElementById("defaultOpen" + tabName).click();
    }
}

// // Sub Tabbed Content
function openSubTab(event, subTabName) {
    var i, subtabcontent, sublinks, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    subtabcontent = document.getElementsByClassName("subtabcontent");
    sublinks = document.getElementsByClassName("sublinks");
    dropdowncontent = document.getElementsByClassName("dropdowncontent");
    dropdownlinks = document.getElementsByClassName("dropbtn");

    // Hide all subtab and tab contents by default
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab links (including the primary and secondary bar)
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < sublinks.length; i++) {
        sublinks[i].className = sublinks[i].className.replace(" active", "");
    }

    // Show the current tab and add 'active' class to the clicked tab link
    document.getElementById(subTabName).style.display = "block";
    event.currentTarget.className += " active";
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    //For hardware and electronics subtab, also select the default no content dropdown menu item
    if (subTabName === "SeniorDesign_Hardware&Electronics") {
        // Hide all dropdown contents by default
        for (i = 0; i < dropdowncontent.length; i++) {
            dropdowncontent[i].style.display = "none";
        }
         // Remove the 'active' class from all dropdown links
        for (i = 0; i < dropdownlinks.length; i++) {
            dropdownlinks[i].className = dropdownlinks[i].className.replace(" active", "");
        }
        document.getElementById("no-content").style.display = "block";
        // event.currentTarget.className += " active";

    }

}

// Open Dropdown Menu Content
function openDropdownMenu(event, dropDownName) {
    var i, dropdowncontent, dropdownlinks;
    dropdowncontent = document.getElementsByClassName("dropdowncontent");
    dropdownlinks = document.getElementsByClassName("dropbtn");

    // Hide all dropdown contents by default
    for (i = 0; i < dropdowncontent.length; i++) {
        dropdowncontent[i].style.display = "none";
    }

    // Remove the 'active' class from all dropdown links
    for (i = 0; i < dropdownlinks.length; i++) {
        dropdownlinks[i].className = dropdownlinks[i].className.replace(" active", "");
    }

    // Show the current dropdown content and add 'active' class to the clicked dropdown link
    document.getElementById(dropDownName).style.display = "block";
    event.currentTarget.className += " active";
}

// Open the first tab by default
document.getElementById("defaultOpenHomePage").click();