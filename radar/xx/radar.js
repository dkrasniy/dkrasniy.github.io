 // ------ Loop through all items and add quarter/year class to element  ------ // 
      $('.innerWrapper').each(function () {
          //STARTING QUARTER
          let Q = 1;  
          //STARTING YEAR
          let Y = 2017;

          $(this).children().each(function () {
            if (!$(this).hasClass("FYheader")) {
              $( this ).addClass( "Y" + Y + " Q" + Q )
            }
            if (Q >= 4){ Q=1; Y++; } else {Q++;}
           })
       });


      // ------ Table scrolling and fit ------ // 
       let scrollWrapperWidth = $('.scrollWrapper').outerWidth();
       
       let swipeCounter = 0;
       let swipePos = 0;
       let yearColumns = 3;

      showYears(3);


       function translateTable(dir) {
         let yearWidth = scrollWrapperWidth/yearColumns;
         if (dir == "left" && swipeCounter > 0) { 
           swipePos += yearWidth;
           swipeCounter--;
        } 
        
        if (dir == "right" && swipeCounter < 300) { 
          swipePos -= yearWidth;
          swipeCounter++;
        }

         $('.innerWrapper').css('transform', 'translateX('+ (swipePos) + 'px)');
         console.log("Swipe Position", swipeCounter)
       }

       function showYears(yearsAmount) {
        yearColumns = yearsAmount;
        let yearWidth = scrollWrapperWidth/yearsAmount;
        let quarterWidth = yearWidth/4;

        $('.innerWrapper').css('transform', 'translateX('+ (-1 * yearWidth * swipeCounter) + 'px)');
        $('.innerWrapper').css('grid-template-columns', 'repeat(32, ' + (quarterWidth) + 'px)');

       }



      // ------ More details toggle ------ //  
      $('.liToggle').click(function(e) {
          let sidebarTarget = e.currentTarget.dataset.target;

          // Close all other sidebars if any open
          $('.overlaySidebar.visible').removeClass( "visible" )
          
          $( sidebarTarget ).addClass( "visible" )
      
      })
      $('.close').click(function() {
        // Remove visible class from all sidebars
         $('body').toggleClass('document-open');
         $('.overlaySidebar.visible').removeClass( "visible" )
      })
      

          
        function filterItems() {
          $("input:checkbox[name=programName]:not(:checked)").each(function(){
              $('ul.innerDataUl li.'+$(this).val()).addClass( "not-checked" )
              
          });
          $("input:checkbox[name=programName]:checked").each(function(){
              $('ul.innerDataUl li.'+$(this).val()).removeClass( "not-checked" )
              
          });
          $('.table-scroll').addClass( "filter-applied" )
         }
         
         
         $('.filter-program-btn').click(function() {
             $('.program-filer').toggleClass( "visible" )
         })
         $('#programFilter .btn').click(function() {
             $('.program-filer').toggleClass( "visible" )
         })
         
