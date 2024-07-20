const iconMenu = document.querySelector('#icon_menu');
const iconClose = document.querySelector('#icon_close');
const overlay = document.querySelector('#overlay');
const bodyPage = document.querySelector('body');
const mobileNavSlider = document.querySelector('#mobile_nav_slider');
const featureList = document.querySelector('#feature_list');
const companyList = document.querySelector('#company_list');

const arrowDownFeatures = document.querySelector('#arrow_down_features');
const arrowUpFeatures = document.querySelector('#arrow_up_features');
const arrowDownFeaturesDesktop = document.querySelector('#arrow_down_features_desktop');
const arrowUpFeaturesDesktop = document.querySelector('#arrow_up_features_desktop');
const arrowDownCompanyDesktop = document.querySelector('#arrow_down_company_desktop');
const arrowUpCompanyDesktop = document.querySelector('#arrow_up_company_desktop');

const arrowDownCompany = document.querySelector('#arrow_down_company');
const arrowUpCompany = document.querySelector('#arrow_up_company');
    
const featuresDropdownMobile = document.querySelector('#features_dropdown_mobile');
const companyDropdownMobile = document.querySelector('#company_dropdown_mobile');

const featureListDesktop = document.querySelector('#feature_list_desktop');
const featuresDropdownDesktop = document.querySelector('#features_dropdown_desktop');

const companyListDesktop = document.querySelector('#company_list_desktop');
const companyDropdownDesktop = document.querySelector('#company_dropdown_desktop');

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
    arrowUpFeaturesDesktop.classList.remove('hidden');
    arrowDownFeaturesDesktop.classList.add('hidden');
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

featureListDesktop.addEventListener('mouseover', ()=>{
  featuresDropdownDesktop.classList.remove('hidden');
  arrowUpFeaturesDesktop.classList.remove('hidden');
  arrowDownFeaturesDesktop.classList.add('hidden');
});

featureListDesktop.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!featuresDropdownDesktop.matches(':hover') && !featureListDesktop.matches(':hover')) {
      featuresDropdownDesktop.classList.add('hidden');
      arrowUpFeaturesDesktop.classList.add('hidden');
      arrowDownFeaturesDesktop.classList.remove('hidden');
    }
  }, 100);
});

companyListDesktop.addEventListener('mouseover', ()=>{
  companyDropdownDesktop.classList.remove('hidden');
  arrowUpCompanyDesktop.classList.remove('hidden');
  arrowDownCompanyDesktop.classList.add('hidden');
});

companyListDesktop.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!companyDropdownDesktop.matches(':hover') && !companyListDesktop.matches(':hover')) {
      companyDropdownDesktop.classList.add('hidden');
      arrowUpCompanyDesktop.classList.add('hidden');
      arrowDownCompanyDesktop.classList.remove('hidden');
    }
  }, 100);
});