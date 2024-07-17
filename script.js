const iconMenu = document.querySelector('#icon_menu');
    const iconClose = document.querySelector('#icon_close');
    const overlay = document.querySelector('#overlay');
    const bodyPage = document.querySelector('body');
    const mobileNavSlider = document.querySelector('#mobile_nav_slider');
    const featureList = document.querySelector('#feature_list');
    const companyList = document.querySelector('#company_list');

    const arrowDownFeatures = document.querySelector('#arrow_down_features');
    const arrowUpFeatures = document.querySelector('#arrow_up_features');

    const arrowDownCompany = document.querySelector('#arrow_down_company');
    const arrowUpCompany = document.querySelector('#arrow_up_company');
    
    const featuresDropdownMobile = document.querySelector('#features_dropdown_mobile');
    const companyDropdownMobile = document.querySelector('#company_dropdown_mobile');


    iconMenu.addEventListener('click', ()=>{
      mobileNavSlider.classList.remove('hidden');
      overlay.classList.remove('hidden');
      bodyPage.classList.add('overflow-clip')
    });

    iconClose.addEventListener('click', ()=>{
      mobileNavSlider.classList.add('hidden');
      overlay.classList.add('hidden');
      bodyPage.classList.remove('overflow-clip')
    })

    featureList.addEventListener('click', ()=>{
      if(featuresDropdownMobile.classList.contains('hidden')) {
        featuresDropdownMobile.classList.remove('hidden');
        arrowUpFeatures.classList.remove('hidden');
        arrowDownFeatures.classList.add('hidden');
      } else {
        featuresDropdownMobile.classList.add('hidden');
        arrowUpFeatures.classList.add('hidden');
        arrowDownFeatures.classList.remove('hidden');
      }
    });

    companyList.addEventListener('click', ()=>{
      if(companyDropdownMobile.classList.contains('hidden')) {
        companyDropdownMobile.classList.remove('hidden');
        arrowUpCompany.classList.remove('hidden');
        arrowDownCompany.classList.add('hidden');
      } else {
        companyDropdownMobile.classList.add('hidden');
        arrowDownCompany.classList.remove('hidden');
        arrowUpCompany.classList.add('hidden');
      }
    });