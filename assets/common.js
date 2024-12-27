// var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
// console.log("taget_date", target_date);
// var days, hours, minutes, seconds; // variables for time units

// var countdown = document.getElementById("tiles"); // get tag element

// getCountdown();

// setInterval(function () { getCountdown(); }, 1000);

// function getCountdown(){

// 	// find the amount of "seconds" between now and target
// 	var current_date = new Date().getTime();
// 	var seconds_left = (target_date - current_date) / 1000;

// 	days = pad( parseInt(seconds_left / 86400) );
// 	seconds_left = seconds_left % 86400;
		 
// 	hours = pad( parseInt(seconds_left / 3600) );
// 	seconds_left = seconds_left % 3600;
		  
// 	minutes = pad( parseInt(seconds_left / 60) );
// 	seconds = pad( parseInt( seconds_left % 60 ) );

// 	// format countdown string + set tag value
// 	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
// }

// function pad(n) {
// 	return (n < 10 ? '0' : '') + n;
// }





// document.addEventListener('DOMContentLoaded', function() {
//     var buyNowButton = document.querySelector('.shopify-payment-button__button'); // Adjust this selector to match your "Buy Now" button
//     var variantSelector = document.querySelector('[name="id"]'); // Shopify's default selector for variant dropdown

//     // Initially disable the "Buy Now" button
//     buyNowButton.disabled = true;

//     // Event listener to enable the button when a variant is selected
//     variantSelector.addEventListener('change', function() {
//         var selectedVariant = this.value;

//         if (selectedVariant) {
//             buyNowButton.disabled = false;
//         } else {
//             buyNowButton.disabled = true;
//         }
//     });
// });

console.log('audioplay')
// document.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById("autoplay-audio");
//     setTimeout(function(){
//         audio.play().catch(function(error) {
//             console.log('Autoplay was prevented.');
//         });
//     }, 1000);
// });


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("autoplay-audio");

    // Function to play and reset audio
    function playAudio() {
        audio.currentTime = 0;  // Ensure audio starts from the beginning
        audio.load();           // Reload the audio to reset it fully
        audio.play().catch(function(error) {
            console.log('Autoplay prevented. User interaction may be required.');
        });
    }

    // Attempt to autoplay with a slight delay
    setTimeout(playAudio, 1000); // 1-second delay

    // Handle page reloads or cached page restoration (Safari)
    window.onpageshow = function(event) {
        if (event.persisted) {  // Triggered if the page is restored from cache
            playAudio();        // Retry playing on cache restore
        }
    };
});