// ============================================
        // === НАСТРОЙКИ ===
        const NAME = 'Саша'; // ⬅️ ИМЯ СЕСТРЫ
        const MAX_ATTEMPTS = 20; // ⬅️ 20 ПОПЫТОК

        // === СООБЩЕНИЯ (каждое 3-е нажатие) ===
        const secretMessages = [
            { icon: '💌', title: 'Костик шепчет...', text: 'Ты — моя суперзвезда! Сияй ярче всех цветов! ✨' },
            { icon: '😂', title: 'Костик улыбается...', text: 'Эта кнопка думала, что сможет убежать от ТЕБЯ? Ха-ха! 🤣' },
            { icon: '🔥', title: 'Горячее сообщение!', text: 'Ты настолько крутая, что даже ветер тебя не догонит! 💨' },
            { icon: '💪', title: 'Сила внутри тебя!', text: 'Ты — цветочная воительница! Никакая кнопка не устоит! 💪❤️' },
            { icon: '🎁', title: 'Подарочек!', text: 'Держи виртуальный букет! 🌸 Ты его заслужила! (Реальный ждёт на Земле 😉)' },
            { icon: '💖', title: 'От всего сердца!', text: 'Ты — лучшее, что случилось в моей жизни. С Днём Рождения, родная! ❤️' },
            { icon: '🌟', title: 'Звёздный час!', text: 'Сегодня ты — главная звезда! Пусть весь мир знает! ⭐' },
            { icon: '🤗', title: 'Обнимашки!', text: 'Отправляю тебе самые тёплые объятия! 🤗 Ты справишься!' },
            { icon: '🎉', title: 'Финальный аккорд!', text: 'Это последнее секретное сообщение! Ты почти победила! 🎉' },
            { icon: '🌺', title: 'Цветочная магия!', text: 'Даже розы завидуют твоей красоте и настойчивости! Ты — легенда! 😎' },
            { icon: '🚀', title: 'Полёт нормальный!', text: 'Ты набираешь высоту! Ещё немного — и ты в цветущем саду! 🌸' },
            { icon: '✨', title: 'Секрет Вселенной!', text: 'Главный секрет: ты — самая лучшая! А кнопка просто боится твоей крутости! 😏' }
        ];

        // === ТЕКСТЫ КНОПКИ ===
        const buttonTexts = [
            '🌷 Ой! Почти поймала!',
            '🌸 Хе-хе, я улизнула!',
            '😜 Догоняй в цветах!',
            '🏃‍♀️ Убегаю в сад!',
            '😏 Ты медленная!',
            '😂 Ха-ха! Не поймаешь!',
            '✨ Я — цветок! Не поймать!',
            '💫 Фьють! И нет меня!',
            '🎯 Ещё чуть-чуть!',
            '🔥 ПОСЛЕДНЯЯ ПОПЫТКА!',
            '🌷 Ой! Почти поймала!',
            '🌸 Хе-хе, я улизнула!',
            '😜 Догоняй в цветах!',
            '🏃‍♀️ Убегаю в сад!',
            '😏 Ты медленная!',
            '😂 Ха-ха! Не поймаешь!',
            '✨ Я — цветок! Не поймать!',
            '💫 Фьють! И нет меня!',
            '🎯 Ещё чуть-чуть!',
            '🔥 ПОСЛЕДНЯЯ ПОПЫТКА!'
        ];

        // === ФРАЗЫ ДЛЯ ИСТОРИИ ===
        const storyPhrases = [
            '🌸 <span class="highlight">Счастье</span> улетело в сад! Но ты — <span class="highlight2">цветочная охотница</span>!',
            '💫 <span class="highlight2">Ты — именинница!</span> Ты сильнее <span class="highlight">ветра</span>!',
            '🌷 <span class="highlight">Счастье</span> на поляне! Но ты его догонишь!',
            '✨ <span class="highlight2">Костик</span> смотрит на тебя с улыбкой! <span class="highlight">Счастье</span> будет твоим!',
            '🌺 Ты — <span class="highlight2">звезда</span> этого дня! <span class="highlight">Счастье</span> сдастся!',
            '💖 <span class="highlight">Счастье</span> любит настойчивых! А ты — <span class="highlight2">самая настойчивая</span>!',
            '🌟 <span class="highlight">Счастье</span> устало бегать по саду! Ещё немного!',
            '🎯 <span class="highlight">Счастье</span> дразнит тебя... Но <span class="highlight2">ты — лучшая</span>!',
            '🔥 <span class="highlight3">ПОСЛЕДНЯЯ ПОПЫТКА!</span> Давай, <span class="highlight2">именинница</span>!',
            '🎉 ТЫ ПОБЕДИЛА! <span class="highlight">СЧАСТЬЕ</span> ТВОЁ! 🎉',
            '🌸 <span class="highlight">Счастье</span> улетело в сад! Но ты — <span class="highlight2">цветочная охотница</span>!',
            '💫 <span class="highlight2">Ты — именинница!</span> Ты сильнее <span class="highlight">ветра</span>!',
            '🌷 <span class="highlight">Счастье</span> на поляне! Но ты его догонишь!',
            '✨ <span class="highlight2">Костик</span> смотрит на тебя с улыбкой! <span class="highlight">Счастье</span> будет твоим!',
            '🌺 Ты — <span class="highlight2">звезда</span> этого дня! <span class="highlight">Счастье</span> сдастся!',
            '💖 <span class="highlight">Счастье</span> любит настойчивых! А ты — <span class="highlight2">самая настойчивая</span>!',
            '🌟 <span class="highlight">Счастье</span> устало бегать по саду! Ещё немного!',
            '🎯 <span class="highlight">Счастье</span> дразнит тебя... Но <span class="highlight2">ты — лучшая</span>!',
            '🔥 <span class="highlight3">ПОСЛЕДНЯЯ ПОПЫТКА!</span> Давай, <span class="highlight2">именинница</span>!',
            '🎉 ТЫ ПОБЕДИЛА! <span class="highlight">СЧАСТЬЕ</span> ТВОЁ! 🎉'
        ];

        // === ЭЛЕМЕНТЫ ===
        const btn = document.getElementById('runBtn');
        const gameArea = document.getElementById('gameArea');
        const resetBtn = document.getElementById('resetBtn');
        const musicBtn = document.getElementById('musicBtn');
        const storyLine = document.getElementById('storyLine');
        const attemptDisplay = document.getElementById('attemptDisplay');
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        const heartSpan = document.getElementById('heartCount');
        const escapeSpan = document.getElementById('escapeCount');
        const msgSpan = document.getElementById('msgCount');
        const comboSpan = document.getElementById('comboCount');
        const cardOverlay = document.getElementById('cardOverlay');
        const cardName = document.getElementById('cardName');
        const nameDisplay = document.getElementById('nameDisplay');
        const kostyaNote = document.getElementById('kostyaNote');
        const secretMsg = document.getElementById('secretMessage');
        const msgIcon = document.getElementById('msgIcon');
        const msgTitle = document.getElementById('msgTitle');
        const msgText = document.getElementById('msgText');
        const msgFrom = document.getElementById('msgFrom');

        nameDisplay.textContent = NAME;
        cardName.textContent = NAME;

        // === ПЕРЕМЕННЫЕ ===
        let isCaught = false;
        let attempts = 0;
        let escapes = 0;
        let hearts = 0;
        let msgCount = 0;
        let msgIndex = 0;
        let combo = 0;
        let maxCombo = 0;
        let audio = null;
        let musicPlaying = false;
        let isCardOpen = false;
        let isMsgOpen = false;
        let currentEscape = 0;

        // === МУЗЫКА ===
        function createAudio() {
            if (!audio) {
                audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
                audio.loop = true;
                audio.volume = 0.12;
            }
            return audio;
        }

        musicBtn.addEventListener('click', function() {
            const a = createAudio();
            if (musicPlaying) {
                a.pause();
                musicPlaying = false;
                musicBtn.textContent = '🔇 Тишина';
            } else {
                a.play().catch(() => {});
                musicPlaying = true;
                musicBtn.textContent = '🔊 Музыка';
            }
        });

        document.addEventListener('click', function firstClick() {
            if (!musicPlaying && !isCardOpen) {
                const a = createAudio();
                a.play().catch(() => {});
                musicPlaying = true;
                musicBtn.textContent = '🔊 Музыка';
            }
        }, { once: true });

        // === ОБНОВЛЕНИЕ ===
        function updateProgress() {
            const percent = (escapes / MAX_ATTEMPTS) * 100;
            progressFill.style.width = percent + '%';
            progressPercent.textContent = Math.round(percent) + '%';
            attemptDisplay.textContent = escapes;
            escapeSpan.textContent = escapes;
            comboSpan.textContent = combo;
        }

        // === ДВИЖЕНИЕ КНОПКИ ===
        function moveButton() {
            if (isCaught) return;

            const area = gameArea.getBoundingClientRect();
            const btnRect = btn.getBoundingClientRect();

            const maxX = area.width - btnRect.width - 15;
            const maxY = area.height - btnRect.height - 15;

            let x = Math.random() * maxX;
            let y = Math.random() * maxY;

            x = Math.max(10, Math.min(x, maxX));
            y = Math.max(10, Math.min(y, maxY));

            btn.style.transition = `all 0.08s ease`;
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
            btn.style.transform = 'translate(0, 0) scale(0.9)';

            setTimeout(() => {
                if (!isCaught) btn.style.transform = 'translate(0, 0) scale(1)';
            }, 100);
        }

        // === ПОКАЗАТЬ СЕКРЕТНОЕ СООБЩЕНИЕ ===
        function showSecretMessage() {
            if (isMsgOpen || isCardOpen) return;
            isMsgOpen = true;

            const msg = secretMessages[msgIndex % secretMessages.length];
            msgIcon.textContent = msg.icon;
            msgTitle.textContent = msg.title;
            msgText.textContent = msg.text;
            msgFrom.textContent = '— От Костика с любовью ❤️';

            secretMsg.classList.add('show');
            msgCount++;
            msgSpan.textContent = msgCount;
            msgIndex++;

            if (navigator.vibrate) navigator.vibrate(80);
        }

        function closeSecretMessage() {
            secretMsg.classList.remove('show');
            isMsgOpen = false;
        }

        // === КЛИК ПО КНОПКЕ ===
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isCaught || isCardOpen || isMsgOpen) return;

            attempts++;
            combo++;

            if (combo > maxCombo) maxCombo = combo;
            updateProgress();

            if (escapes >= MAX_ATTEMPTS) return;

            escapes++;
            currentEscape = escapes - 1;

            btn.textContent = buttonTexts[currentEscape % buttonTexts.length];
            storyLine.innerHTML = storyPhrases[currentEscape % storyPhrases.length];

            updateProgress();

            // === КАЖДОЕ 3-Е НАЖАТИЕ — СООБЩЕНИЕ! ===
            if (attempts % 3 === 0 && escapes < MAX_ATTEMPTS) {
                setTimeout(() => {
                    showSecretMessage();
                }, 300);
                combo = 0;
                updateProgress();
            }

            // Сердечки
            if (escapes % 2 === 0 && escapes < MAX_ATTEMPTS) {
                hearts++;
                heartSpan.textContent = hearts;
            }

            // Бонус за комбо
            if (combo >= 5 && escapes < MAX_ATTEMPTS) {
                hearts += 2;
                heartSpan.textContent = hearts;
                showHint('🔥 Супер-комбо! +2 сердечка! Ты — цветочная легенда! 🌸');
            }

            if (escapes < MAX_ATTEMPTS) {
                moveButton();
                
                btn.style.transform = 'translate(0, 0) scale(0.85)';
                setTimeout(() => {
                    if (!isCaught) btn.style.transform = 'translate(0, 0) scale(1)';
                }, 150);

            } else {
                catchTheButton();
            }
        });

        // === ПОЙМАЛИ! ===
        function catchTheButton() {
            if (isCaught || isCardOpen) return;
            isCaught = true;

            btn.textContent = '🎉 ПОЙМАЛА! 🎉';
            btn.classList.add('caught');
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = 'translate(-50%, -50%) scale(1.2)';

            storyLine.innerHTML = '🌸 <span class="highlight">СЧАСТЬЕ</span> ПОЙМАНО В САДУ! 🌸<br>Ты — <span class="highlight2">САМАЯ КРУТАЯ</span> именинница! <span class="highlight3">🎉</span>';

            if (audio) audio.volume = 0.4;

            hearts += 20;
            heartSpan.textContent = hearts;

            kostyaNote.classList.add('hidden');

            launchConfetti();
            setTimeout(() => launchConfetti(), 400);
            setTimeout(() => launchConfetti(), 800);

            setTimeout(() => {
                openCard();
            }, 1500);
        }

        // === ОТКРЫТКА ===
        function openCard() {
            isCardOpen = true;
            cardOverlay.classList.add('show');
            if (audio) audio.volume = 0.5;
            setTimeout(launchConfetti, 200);
            setTimeout(launchConfetti, 500);
            setTimeout(launchConfetti, 800);
        }

        function closeCard() {
            cardOverlay.classList.remove('show');
            isCardOpen = false;
            if (audio) audio.volume = 0.12;
            setTimeout(() => {
                if (!isCardOpen) resetGame();
            }, 1500);
        }

        cardOverlay.addEventListener('click', function(e) {
            if (e.target === cardOverlay) closeCard();
        });

        // === САЛЮТ ===
        function launchConfetti() {
            const emojis = ['🌸', '🌷', '🌺', '🌹', '🌻', '🌼', '💖', '🎀', '✨', '🎉', '🎊', '🎈', '🎁', '🥳', '❤️', '🦋', '🌈'];
            const count = 50 + Math.floor(Math.random() * 30);
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const el = document.createElement('div');
                    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    const size = Math.random() * 30 + 18;
                    const rotation = Math.random() * 720;
                    el.style.cssText = `
                        position: fixed;
                        font-size: ${size}px;
                        left: ${Math.random() * 100}vw;
                        top: -10vh;
                        pointer-events: none;
                        z-index: 9999;
                        transition: all ${3 + Math.random() * 2}s cubic-bezier(0.2, 0.8, 0.3, 1);
                        opacity: 1;
                        transform: rotate(0deg) scale(1);
                    `;
                    document.body.appendChild(el);

                    requestAnimationFrame(() => {
                        el.style.transform = `translateY(${window.innerHeight + 150}px) rotate(${rotation}deg) scale(${0.5 + Math.random() * 0.5})`;
                        el.style.opacity = '0';
                    });

                    setTimeout(() => el.remove(), 5000);
                }, i * 40);
            }
        }

        // === ПОДСКАЗКА ===
        function showHint(text) {
            const old = document.querySelector('.hint-popup');
            if (old) old.remove();

            const popup = document.createElement('div');
            popup.className = 'hint-popup';
            popup.textContent = text;
            document.body.appendChild(popup);

            setTimeout(() => {
                popup.classList.add('hide');
                setTimeout(() => popup.remove(), 400);
            }, 3500);
        }

        // === СБРОС ===
        function resetGame() {
            isCaught = false;
            attempts = 0;
            escapes = 0;
            currentEscape = 0;
            hearts = 0;
            msgCount = 0;
            msgIndex = 0;
            combo = 0;
            maxCombo = 0;
            heartSpan.textContent = '0';
            msgSpan.textContent = '0';

            btn.textContent = '🌸 Лови!';
            btn.classList.remove('caught');
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = 'translate(-50%, -50%) scale(1)';

            storyLine.innerHTML = '🌸 Сегодня твой особенный день! <span class="highlight">Счастье</span> прячется в цветах... У тебя <span class="highlight3">20 попыток</span>, чтобы его поймать!';
            
            updateProgress();

            kostyaNote.classList.remove('hidden');

            if (audio) audio.volume = 0.12;

            const popup = document.querySelector('.hint-popup');
            if (popup) popup.remove();

            closeSecretMessage();
        }

        resetBtn.addEventListener('click', function() {
            if (isCardOpen) {
                closeCard();
                setTimeout(resetGame, 500);
            } else {
                resetGame();
            }
        });

        // === КЛИК ПО ЗАПИСКЕ ===
        kostyaNote.addEventListener('click', function() {
            showHint('💪 Костик сказал: "Каждые 3 нажатия — сюрприз! Ищи комбо-бонусы!" ❤️');
        });

        // === ИНИЦИАЛИЗАЦИЯ ===
        btn.style.left = '50%';
        btn.style.top = '50%';
        btn.style.transform = 'translate(-50%, -50%)';
        updateProgress();

        // === ПРИ РЕСАЙЗЕ ===
        window.addEventListener('resize', function() {
            if (!isCaught && !isCardOpen && escapes < MAX_ATTEMPTS) {
                const area = gameArea.getBoundingClientRect();
                const btnRect = btn.getBoundingClientRect();
                if (btnRect.left < area.left + 10 || btnRect.right > area.right - 10 ||
                    btnRect.top < area.top + 10 || btnRect.bottom > area.bottom - 10) {
                    btn.style.left = '50%';
                    btn.style.top = '50%';
                    btn.style.transform = 'translate(-50%, -50%)';
                }
            }
        });

        console.log(`🌸 КВЕСТ ДЛЯ ${NAME} (20 попыток)!`);
        console.log('💬 Каждые 3 нажатия — секретное сообщение от Костика!');
        console.log('⚡ Собирай комбо для бонусов!');
        console.log('🔥 Удачи, именинница!');
