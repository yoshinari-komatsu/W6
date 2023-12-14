(() => {

	class Accordion {
		
		//初期化
		constructor(obj){

			console.log('obj', obj.hookName);

			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;
			let index = 0;
			while (index < triggerLen) {
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));	
				index++;
			}
		}

		//クリックしたら実行される処理
		clickHandler(e){
			e.preventDefault();

			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;
			
			if($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display ='block';
			}
		}
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a'
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt'
	});


	



})();

const slideUp = (el, duration = 300) => {
	el.style.height = el.offsetHeight + "px";
	el.offsetHeight;
	el.style.transitionProperty = "height, margin, padding";
	el.style.transitionDuration = duration + "ms";
	el.style.transitionTimingFunction = "ease";
	el.style.overflow = "hidden";
	el.style.height = 0;
	el.style.paddingTop = 0;
	el.style.paddingBottom = 0;
	el.style.marginTop = 0;
	el.style.marginBottom = 0;
	setTimeout(() => {
	  el.style.display = "none";
	  el.style.removeProperty("height");
	  el.style.removeProperty("padding-top");
	  el.style.removeProperty("padding-bottom");
	  el.style.removeProperty("margin-top");
	  el.style.removeProperty("margin-bottom");
	  el.style.removeProperty("overflow");
	  el.style.removeProperty("transition-duration");
	  el.style.removeProperty("transition-property");
	  el.style.removeProperty("transition-timing-function");
	  el.classList.remove("is-open");
	}, duration);
  };
  
  const slideDown = (el, duration = 300) => {
	el.classList.add("is-open");
	el.style.removeProperty("display");
	let display = window.getComputedStyle(el).display;
	if (display === "none") {
	  display = "block";
	}
	el.style.display = display;
	let height = el.offsetHeight;
	el.style.overflow = "hidden";
	el.style.height = 0;
	el.style.paddingTop = 0;
	el.style.paddingBottom = 0;
	el.style.marginTop = 0;
	el.style.marginBottom = 0;
	el.offsetHeight;
	el.style.transitionProperty = "height, margin, padding";
	el.style.transitionDuration = duration + "ms";
	el.style.transitionTimingFunction = "ease";
	el.style.height = height + "px";
	el.style.removeProperty("padding-top");
	el.style.removeProperty("padding-bottom");
	el.style.removeProperty("margin-top");
	el.style.removeProperty("margin-bottom");
	setTimeout(() => {
	  el.style.removeProperty("height");
	  el.style.removeProperty("overflow");
	  el.style.removeProperty("transition-duration");
	  el.style.removeProperty("transition-property");
	  el.style.removeProperty("transition-timing-function");
	}, duration);
  };

  const slideToggle = (el, duration = 300) => {
	if (window.getComputedStyle(el).display === "none") {
	  return slideDown(el, duration);
	} else {
	  return slideUp(el, duration);
	}
  };
  
  const accordions = document.querySelectorAll(".js-accordion");
  const accordionsArr = Array.prototype.slice.call(accordions);
  
  accordionsArr.forEach((accordion) => {
	const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
	const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);
  
	accordionTriggersArr.forEach((trigger) => {
	  trigger.addEventListener("click", (e) => {
		accordionTriggersArr.forEach((trigger) => {

		  if (trigger !== e.target.parentElement) {
			trigger.classList.remove("is-active");
			const openedContent = trigger.querySelector(".accordion__content");
			slideUp(openedContent);
		  }
		});

		trigger.classList.toggle("is-active");
		const content = trigger.querySelector(".accordion__content");
		slideToggle(content);
	  });
	});
  });