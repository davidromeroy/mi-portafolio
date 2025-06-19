const langToggleBtn = document.getElementById("langToggleBtn");
				const cvFrame = document.getElementById("cvFrame");

				let isEnglish = true;

				langToggleBtn.addEventListener("click", () => {
					isEnglish = !isEnglish;
			        const timestamp = new Date().getTime(); // Para evitar caché

					if (isEnglish) {
						cvFrame.src = "assets/CV_DavidAlejandroRomeroYanez_EN.pdf";
						langToggleBtn.textContent = "Switch to Spanish";
					} else {
						cvFrame.src = "assets/CV_DavidAlejandroRomeroYanez_ES.pdf";
						langToggleBtn.textContent = "Cambiar a Inglés";
					}
				});