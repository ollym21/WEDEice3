
 /*Code Attribution:
Varsity College Durban North (2024) WEDE5020 HCWAD 2024 Module Manual. Durban: Varsity College.
Sync up sessions
*/

$("img").click(function() {
    //j Query click event handler for the image
    
        $("#lightbox-image").attr("src", $(this).attr("src")); 
        //set source of lightbox image to be the same as the clicked product image
    
        $("lightbox").show();
        //show light box by changing its display style to block
    });
    
    
    
    //jQuery click event handler for the close button
    $("#close").click(function() {
        //hide lightbox by changing its display style to none
        $("#lightbox").hide();
    });
    
    
    
    //function thta updates date stamp
    function updataDateStamp (){
    
        const now= new Date() //this var represents the current date and time
    
        document.getElementById("dateTime").innerText = now.toLocaleString();
        //this updates the inner text of paragrapgh with current date and time in localized format
    
    }
    
    setInterval(updataDateStamp, 1000) ; //calling function for every second (1000 miliseconds) to keep the time updated
    updataDateTime() ; //initial call to updateDateTime  to set the current  date and tine immediately on page load
    
    
    
    //function to clear field
    function clearfield (element) {
        element.value = ''
    
    }
    
    //function for validation
    function validateform() {
        var name = document.getElementById('name').value ;
        var email = document.getElementById('email').value ;
        var subject = document.getElementById('subject').value ;
        var message = document.getElementById('message').value;
    
    
        if  (name == '' || email==''||subject==''|| message=='' ) {
            alert('All fields are required.');
            return false;
        }
        return true;
    }