
      
      // ********************
      // Slider DOTS Filterring
      // ********************

      var el = '.slick-dots li';
      var active = '.slick-dots .slick-active';
      var activeIndex = 0;
      var activeStoredIndex = 0;
      var elLength = $(el).length;
      var group = 1;
      var groupLength = 5;


      // Set Initial State
      // Hide all dots
      $(el).addClass('d-none');

      // Show only first 5 dots
      $('.slick-slider').each(function() {
        for (let i = 0; i < groupLength; i++ ) {
          $(this).find(el).eq(i).removeClass('d-none');
        }
      });

      // console.log('activeIndex: ' + activeIndex + ' | activeStoredIndex: ' + activeStoredIndex + ' | group: ' + group + ' | groupLength: ' + (groupLength * group - 1 ));
      

      // On after slide change
      $('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {

        activeIndex = $(this).find(active).index();

        //  Next Button (go Up)
        if (activeIndex > activeStoredIndex ) {

          // if active dot in current group (up to 5)
          if ( activeIndex < (groupLength * group )) {

              activeStoredIndex = activeIndex;
              filterDots(this);

          }
          // active dot is left current group => Change group index
          else {
            group = group + 1;
            activeStoredIndex = activeIndex;
            filterDots(this);
          }

        }

        // Prev Button (go Down)
        else {

          // if active dot in current group (up to 5)
          if ( activeIndex >= (groupLength * group - 5 )) {

            activeStoredIndex = activeIndex;
            filterDots(this);

          }
          // active dot is left current group => Change group index
          else {
            group = group - 1;
            activeStoredIndex = activeIndex;
            filterDots(this);
          }

        }

        

        function filterDots(that) {
          
          $(that).find(el).addClass('d-none');

          for (let i = (groupLength * group - 5 ); i < (groupLength * group); i++ ) {
            $(that).find(el).eq(i).removeClass('d-none');
          }

        }
        

      });

// End Slider DOTS Filterring 