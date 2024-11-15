document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		const mainPortlet = document.querySelector(".portlet[data-portlet=landing-fullclaro]");
		const personImg = mainPortlet.querySelector('.fullClaro__body__item__person');
		const headSet = mainPortlet.querySelector('.fullClaro__body__item__headset');
		const popCorn = mainPortlet.querySelector('.fullClaro__body__item__popcorn');
		const laptop = mainPortlet.querySelector('.fullClaro__body__item__laptop');
		// const iconsFeatured = mainPortlet.querySelectorAll('.content_infographica__body__featured__item .ico');
		const tooltip = mainPortlet.querySelector('.tooltip__info__bottom');
		const tooltipBtn = mainPortlet.querySelector('.tooltip__info__circle');
		const modal = mainPortlet.querySelector('.modal_infographica');
		const modalClose = mainPortlet.querySelector('.modal_infographica .modal_infographica__close');
		const modalBtn = mainPortlet.querySelector('.modal_infographica .modal_infographica__body__btn');
		console.log({
			personImg
		})
		// Esperar un tiempo antes de realizar las modificaciones
		setTimeout(() => {
			// Eliminar clases
			personImg.classList.remove('a-pop-down');
			headSet.classList.remove('a-pop-left');
			popCorn.classList.remove('a-pop-right');
			laptop.classList.remove('a-pop-down');

			// Agregar atributo animation-delay
			personImg.style.animationDelay = '500ms';
			headSet.style.animationDelay = '800ms';
			popCorn.style.animationDelay = '1200ms';
			laptop.style.animationDelay = '1600ms';

			// Agregar clases
			personImg.classList.add('a-floatY');
			headSet.classList.add('a-floatY');
			popCorn.classList.add('a-floatY');
			laptop.classList.add('a-floatY');
		}, 3000);
		tooltip.addEventListener("click", function (e) {
			modal.classList.add('active');
		});

		modalClose.addEventListener('click', () => {
			modal.classList.remove('active');
			tooltip.classList.remove('active');
		})
		modalBtn.addEventListener('click', () => {
			modal.classList.remove('active');
			tooltip.classList.remove('active');
		})
		//media query max 1200px
		if (window.matchMedia("(max-width: 1200px)").matches) {
			tooltipBtn.addEventListener("click", function (e) {
				modal.classList.add('active');
			});
		} else {
			tooltipBtn.addEventListener("mouseover", function (e) {
				modal.classList.add('active');
			});
		}
		window.addEventListener('resize', () => {
			if (window.matchMedia("(max-width: 1200px)").matches) {
				tooltipBtn.addEventListener("click", function (e) {
					modal.classList.add('active');
				});
			} else {
				tooltipBtn.addEventListener("mouseover", function (e) {
					modal.classList.add('active');
				});
			}
		})
	}, 800);

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 4,
		spaceBetween: 40,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1441: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1041: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			678: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	var swiper2 = new Swiper(".mySwiper2", {
		slidesPerView: 4,
		spaceBetween: 40,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1441: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1041: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			678: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	});

	/* Activar o desactivar los sliders */
	const tipos = document.querySelectorAll('.section2 .tipo');
	const swipers = document.querySelectorAll('.section2 .swiper');

	if (tipos.length > 0) {
		tipos[0].classList.add('select');
	}
	if (swipers.length > 0) {
		swipers[0].classList.add('active');
	}

	function handleTipoClick(event) {
		tipos.forEach(tipo => tipo.classList.remove('select'));
		const clickedTipo = event.currentTarget;
		clickedTipo.classList.add('select');

		const selectedSlider = clickedTipo.getAttribute('data-slider');

		swipers.forEach(swiper => swiper.classList.remove('active'));

		const matchingSwiper = Array.from(swipers).find(swiper => swiper.getAttribute('data-slider') === selectedSlider);
		if (matchingSwiper) {
			matchingSwiper.classList.add('active');
		}
	}

	tipos.forEach(tipo => tipo.addEventListener('click', handleTipoClick));

	/* end activar o desactivar los slider */


	/* enunciado flotante de informacion */
	const tooltips = document.querySelectorAll('.icon-info');

	tooltips.forEach(function (tooltip) {
		const descriptionText = tooltip.getAttribute('data-description-text');
		const tooltipTextElement = tooltip.querySelector('.tooltip-text');
		tooltipTextElement.innerHTML = descriptionText;
	});
	/* end enunciado flotante de informacion */

	/* modals */

	document.querySelectorAll('a.more').forEach(link => {
		link.addEventListener('click', function (event) {
			document.querySelector("body").classList.add("scrollhidden");
			event.preventDefault();

			let swiperSlide = this.closest('.swiper-slide');

			if (swiperSlide) {
				let dataTipo = swiperSlide.getAttribute('data-tipo');
				let dataIndice = swiperSlide.getAttribute('data-indice');

				let modals = document.querySelector('.modals');
				if (modals) {
					modals.classList.add('active');
				}

				let modal = document.querySelector(`.modal[data-tipo="${dataTipo}"][data-indice="${dataIndice}"]`);
				if (modal) {
					modal.classList.add('active');
				}
			}
		});
	});

	function closeModal() {
		let modals = document.querySelector('.modals');
		if (modals) {
			modals.classList.remove('active');
		}
		document.querySelectorAll('.modal').forEach(modal => {
			modal.classList.remove('active');
		});
		document.querySelector("body").classList.remove("scrollhidden");
	}

	document.querySelectorAll('.modal .close, a.entendido').forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault();
			closeModal();
		});
	});

	/* end modals */

	var swipersliderCards = new Swiper("#sliderCardsnew", {
		slidesPerView: 4,
		spaceBetween: 25,
		pagination: {
			el: "#sliderCardsnew .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1441: {
				slidesPerView: 4,
				spaceBetween: 25,
			},
			1041: {
				slidesPerView: 3.5,
				spaceBetween: 30,
			},
			701: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			565: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 1.15,
				spaceBetween: 20,
			},
		},
	});

	/* hablando claro */

	fetch('https://apiblog.claromarketingtool.pe/api/HablandoClaroService/lista_lo_mas_leido')
		.then(response => response.json())
		.then(data => {
			const titlesDiv = document.getElementById('contentAnuncios');
			data.forEach(item => {
				const itemAnuncioDiv = document.createElement('div');
				itemAnuncioDiv.className = 'itemAnuncio';

				const a = document.createElement('a');
				a.href = `/hablando-claro/${item.categoria_post_url}/${item.sub_categoria_post_url}/${item.url_post}`;

				itemAnuncioDiv.appendChild(a);

				const contentImgDiv = document.createElement('div');
				contentImgDiv.className = 'contentImg';

				const filterDiv = document.createElement('div');
				filterDiv.className = 'filter';

				const img = document.createElement('img');
				img.src = item.imagen_post;
				img.alt = '';

				contentImgDiv.appendChild(filterDiv);
				contentImgDiv.appendChild(img);

				const contentTextDiv = document.createElement('div');
				contentTextDiv.className = 'contentText';

				const span = document.createElement('span');
				span.textContent = item.categoria;

				const p = document.createElement('p');
				p.className = 'title';
				p.textContent = item.titulo;

				const button = document.createElement('button');
				/*button.className = '';*/
				/**/
				button.textContent = 'Conoce mÃ¡s';

				contentTextDiv.appendChild(span);
				contentTextDiv.appendChild(p);
				contentTextDiv.appendChild(button);

				itemAnuncioDiv.appendChild(contentImgDiv);
				itemAnuncioDiv.appendChild(contentTextDiv);

				titlesDiv.appendChild(itemAnuncioDiv);
			});
		})
		.catch(error => console.error('Error:', error));



	/* end hablando claro */


});