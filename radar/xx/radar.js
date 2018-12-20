$( document ).ready(function() {
    $(document).click(function(e) {
    if ($(e.target).closest('.dropdown-toggle').length === 0) {
        // Close all open toggles if any open
        $('.dropdown-content').removeClass("show");
    }

    if ($(e.target).closest('#radarFilter').length === 0 && $(e.target).closest('.toggle-filter').length === 0) {
        // Close all open toggles if any open
        $('#radarFilter').removeClass("visible");
    }

    


});

// ------ Loop through all items and add quarter/year class to element  ------ // 
$('.innerWrapper').each(function() {
    //STARTING QUARTER
    let Q = 1;
    //STARTING YEAR
    let Y = 2017;

    $(this).children().each(function() {
        if (!$(this).hasClass("FYheader")) {
            $(this).addClass("Y" + Y + " Q" + Q)
        }
        if (Q >= 4) {
            Q = 1;
            Y++;
        } else {
            Q++;
        }
    })
});


// ------ Table scrolling and fit ------ // 
let scrollWrapperWidth = $('.scrollWrapper').outerWidth();

let swipeCounter = 0;
let swipePos = 0;
let yearColumns = 3;

showYears(3);


function translateTable(dir) {
    let yearWidth = scrollWrapperWidth / yearColumns;
    if (dir == "left" && swipeCounter > 0) {
        swipePos += yearWidth;
        swipeCounter--;
    }

    if (dir == "right" && swipeCounter < 300) {
        swipePos -= yearWidth;
        swipeCounter++;
    }

    $('.innerWrapper').css('transform', 'translateX(' + (swipePos) + 'px)');
}

function showYears(yearsAmount) {
    if (yearsAmount == 1) {
        $("body").addClass("oneYearView")
    } else {
        $("body").removeClass("oneYearView")
    }

    yearColumns = yearsAmount;
    let yearWidth = scrollWrapperWidth / yearsAmount;
    let quarterWidth = yearWidth / 4;

    $('.innerWrapper').css('transform', 'translateX(' + (-1 * yearWidth * swipeCounter) + 'px)');
    $('.innerWrapper').css('grid-template-columns', 'repeat(32, ' + (quarterWidth) + 'px)');

}



// ------ More details toggle ------ //  
$('.liToggle').click(function(e) {
    let sidebarTarget = e.currentTarget.dataset.target;

    // Close all other sidebars if any open
    $('.overlaySidebar.visible').removeClass("visible")

    $(sidebarTarget).addClass("visible")
})

$('.close').click(function() {
    // Remove visible class from all sidebars
    $('body').toggleClass('document-open');
    $('.overlaySidebar.visible').removeClass("visible")
})

$('.toggle-filter').click(function(e) {

    console.log(event)

    $('.overlaySidebar.visible').removeClass("visible")

    $('#radarFilter').addClass("visible")
});




function filterItems() {
    $("input:checkbox[name=programName]:not(:checked)").each(function() {
        $('ul.innerDataUl li.' + $(this).val()).addClass("not-checked")

    });
    $("input:checkbox[name=programName]:checked").each(function() {
        $('ul.innerDataUl li.' + $(this).val()).removeClass("not-checked")

    });
    $('.table-scroll').addClass("filter-applied")
}


$('.filter-program-btn').click(function() {
    $('.program-filer').toggleClass("visible")
})
$('#programFilter .btn').click(function() {
    $('.program-filer').toggleClass("visible")
})


$(document).keydown(function(e) {
    //on arrow left 
    if (e.keyCode == 37)
        translateTable('left');
    //arrow right
    if (e.keyCode == 39)
        translateTable('right');
});


$('.dropdown-toggle').click(function(e) {
    let dropdownTarget = e.currentTarget.dataset.target;


    // Close all open toggles if any open
    $('.dropdown-content').removeClass("show")

    $("#" + dropdownTarget).addClass("show")


})


//tabs nav
$('.tabs-nav li a').click(function(e){    
    e.preventDefault();
    var t = e.currentTarget.dataset.target; 

    if(!$(this).hasClass('active')){ //this is the start of our condition 
      $('.tabs-nav li a').removeClass('active');           
      $(this).addClass('active');

      $('.tab-content').removeClass('active');           
      $('#'+t).addClass('active');
   }
  });

  
});