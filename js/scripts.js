(function( $ ) {
	$(document).ready(function() {
        
        // Load SnazzyMenu on each page load
        $("#nav-placeholder").load("http://new.cottonstates.org/nav.htm");

        // Init SnazzyMenu
        setTimeout(function() {
            $('.snazzymenu').snazzyMenu({
                colClasses: true,
                breakpoint: 768,
                position: 'right', // or 'top'
                sticky: true,
                homeBtn:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>',
                locationBtn:'http://maps.google.com/maps?hl=en&gs_nf=1&cp=8&gs_id=w&xhr=t&bav=on.2,or.r_gc.r_pw.r_qf.,cf.osb&biw=1600&bih=779&um=1&ie=UTF-8&q=bayou+desiard+country+club&fb=1&gl=us&hq=bayou+desiard+country+club&hnear=0x862e4876e598840b:0x98ced239c9b8b4c9,Monroe,+LA&sa=',
                locationLabel:'3501 Forsythe Ave, Monroe, LA',
                phoneBtn: '+13183235136',
                phoneLabel: 'Call Now',
                menuBtn: true,
                toggleBtn: 'plus' // or 'caret'
            });
        }, 1000);
        
        // SnazzyMenu column header images
        //$('.column-1').prepend('<img src="1.jpg">');
        //$('.column-2').prepend('<img src="2.jpg">');

	// END DOCUMENT READY
	});


    // Set value of each hidden field as buttons are clicked or selections are made
	function setFieldValue(whichQuestion, whichAnswer) {
		var questionId = "#" + whichQuestion;
		$(questionId).val(whichAnswer);
	}
	
	function setPriceFieldValue() {
		var selectedPrice = $("#purchasePriceSlider").slider("value");
		var priceLabel = $("#purchasePriceValue span");
		setFieldValue("purchasePriceField", selectedPrice);
		priceLabel.text(selectedPrice);
	}
	
})( jQuery );
