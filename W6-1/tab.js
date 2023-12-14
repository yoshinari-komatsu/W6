(()=>{

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;
  
  //初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav, content全て一旦リセットする
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while(index < navLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));  
    index++;
  }

{
  const tabMenus = document.querySelectorAll('.tab__menu-item');
  console.log(tabMenus);
  
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
  })
  
  function tabSwitch(e) {
  
    const tabTargetData = e.currentTarget.dataset.tab;
    const tabList = e.currentTarget.closest('.tab__menu');
    console.log(tabList);
    const tabItems = tabList.querySelectorAll('.tab__menu-item');
    console.log(tabItems);
    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('.tab__panel-box');
    console.log(tabPanelItems);
  
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove('is-active');
    })
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove('is-show');
    })
  
    e.currentTarget.classList.add('is-active');
      tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel ===  tabTargetData) {
        tabPanelItem.classList.add('is-show');
      }
    })
  
  }
  
  }
})();