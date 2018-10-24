$('.tab-title').on('click', function(e) {
    e.preventDefault();
    setActiveTab($(this));
  });
  
  $(window).load(function() {
   setActiveTab($('.tab-nav li:first .tab-title'));
  });
  
  function setActiveTab(activeTab) {
      $('.tab-nav li a').removeClass('active');
      activeTab.addClass('active');
      $('.tab-display').html(activeTab.siblings('.tab-content').html());
  }